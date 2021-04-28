const globby = require("globby");
const rollup = require("rollup");
const buble = require("@rollup/plugin-buble");
const resolve = require("@rollup/plugin-node-resolve");
const fs = require("fs-extra");

const copy = (file, dist = "dist/") => {
  return fs.copy(
    file,
    /(\.\w+)|(LICENSE)$/.test(file) ? `${dist}${file}` : dist
  );
};

Promise.all([
  copy("src/"),
  copy("package.json"),
  copy("README.md"),
  copy("LICENSE"),
])
  .then(() => {
    console.log("copy publish files");
  })
  .catch((err) => {
    throw new Error(err);
  });

const rollupConfig = globby.sync(["src/**/*.js"]).map((inputFile) => {
  const fileName = inputFile.replace("src/", "");
  return {
    input: inputFile,
    output: {
      file: `dist/dist/${fileName}`,
      name: `${
        fileName.split("/")[0].indexOf(".js") > -1 ? "" : fileName.split("/")[0]
      }Utils`,
      exports: "named",
      format: "umd",
      sourcemap: true,
    },
    plugins: [resolve(), buble()],
  };
});

// console.log(rollupConfig);

rollupConfig.forEach((option, i) => {
  rollup.rollup(option).then((bundle) => {
    bundle.write(option.output);
  });
});

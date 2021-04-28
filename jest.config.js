module.exports = {
  verbose: true,
  collectCoverage: true,
  modulePathIgnorePatterns: ["<rootDir>/dist"],
  transform: {
    "\\.m?js$": "babel-jest",
  },
  transformIgnorePatterns: [],
};

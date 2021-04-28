import safe from "../src/safe";

describe("test safe module", () => {
  test("test safe filter", () => {
    expect(safe.xssFilter("<script></script>")).toBe(
      "&lt;script&gt;&lt;/script&gt;"
    );
  });
});

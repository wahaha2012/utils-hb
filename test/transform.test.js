import transform from "../src/transform";

describe("test transform module", () => {
  test("data2Set", () => {
    expect(transform.data2Set(new Set()) instanceof Set).toBe(true);
    expect(transform.data2Set([]) instanceof Set).toBe(true);
    expect(transform.data2Set(1) instanceof Set).toBe(true);
  });

  test("paramsToQueryString", () => {
    expect(transform.paramsToQueryString({ a: 1, b: undefined, c: 2 })).toBe(
      "a=1&c=2"
    );
  });

  test("getQueryString", () => {
    expect(transform.getQueryString("a", "url?a=1&c=2")).toBe("1");
    expect(transform.getQueryString("b", "url?a=1&c=2")).toBe("");
    expect(transform.getQueryString("b")).toBe("");
  });
});

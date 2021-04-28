import utils from "../src/";
import { format } from "../src";

describe("test index module", () => {
  test("import utils from module default entry", () => {
    expect(typeof utils).toBe("object");
  });

  test("import named export from utils", () => {
    expect(typeof format).toBe("object");
    expect(typeof format.getSign).toBe("function");
  });
});

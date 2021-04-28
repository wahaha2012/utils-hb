import queue from "../src/queue";

describe("test queue module", () => {
  test("test debounce immediate", () => {
    let status = "waiting";
    const fn = queue.debounce(
      () => {
        status = "finished";
      },
      0,
      true
    );
    expect(fn instanceof Function).toBe(true);
    expect(status).toBe("waiting");

    fn();
  });
});

import { createTimer } from "./createTimer";
import { expect, describe, it } from "vitest";

// write test that checks if createTimer works
describe("createTimer", () => {
  it("should create a timer", () => {
    const [time, setTime] = createTimer(180);
    expect(time()).toBe(180);
    expect(time("m")).toBe(3);
    expect(
      (() => {
        setTime(2, "m");
        return time("m");
      })()
    ).toBe(5);
  });
});

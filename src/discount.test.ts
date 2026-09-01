import { describe, expect, it } from "vitest";
import { applyDiscount } from "./discount";

describe("applyDiscount", () => {
  it("takes a percentage off the price, not a flat cents amount", () => {
    expect(applyDiscount(1000, 10)).toBe(900);
  });

  it("rounds to the nearest cent when the percentage doesn't divide evenly", () => {
    expect(applyDiscount(999, 33)).toBe(669);
  });
});

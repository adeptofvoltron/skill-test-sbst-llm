import { describe, expect, it } from "vitest";
import { addTax, formatCents } from "./currency";

describe("formatCents", () => {
  it("formats whole dollars", () => {
    expect(formatCents(1000)).toBe("$10.00");
  });

  it("pads single-digit cents", () => {
    expect(formatCents(105)).toBe("$1.05");
  });

  it("handles negative amounts", () => {
    expect(formatCents(-250)).toBe("-$2.50");
  });
});

describe("addTax", () => {
  it("adds a percentage tax and rounds to the nearest cent", () => {
    expect(addTax(1000, 8.25)).toBe(1083);
  });
});

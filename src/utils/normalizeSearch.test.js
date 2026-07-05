import { describe, it, expect } from "vitest";
import { normalizeSearch } from "./normalizeSearch";

describe("normalizeSearch", () => {
  it("lowercases and trims the input", () => {
    expect(normalizeSearch("  React Hooks  ")).toBe("react hooks");
  });

  it("returns an empty string for whitespace-only input", () => {
    expect(normalizeSearch("   ")).toBe("");
  });
});

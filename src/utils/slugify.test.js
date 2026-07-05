import { describe, it, expect } from "vitest";
import { slugify } from "./slugify";

describe("slugify", () => {
  it("lowercases and replaces spaces with hyphens", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("strips punctuation", () => {
    expect(slugify("Hello, World!")).toBe("hello-world");
  });

  // NOTE: \w in the regex only matches ASCII word chars, so non-Latin
  // scripts are stripped entirely rather than transliterated/kept.
  it("strips non-Latin characters instead of preserving them", () => {
    expect(slugify("Motivation নয়, Consistency!")).toBe("motivation-consistency");
  });

  it("trims leading/trailing whitespace before slugifying", () => {
    expect(slugify("  Padded Title  ")).toBe("padded-title");
  });

  it("collapses multiple spaces into a single hyphen", () => {
    expect(slugify("Too   Many    Spaces")).toBe("too-many-spaces");
  });
});

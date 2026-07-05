import { describe, it, expect } from "vitest";
import { getRelatedPosts } from "./getRelatedPosts";

const currentPost = {
  slug: "current",
  category: "Blog",
  tags: ["react", "hooks"],
};

describe("getRelatedPosts", () => {
  it("returns an empty array when allPosts is not an array", () => {
    expect(getRelatedPosts(null, currentPost)).toEqual([]);
  });

  it("returns an empty array when currentPost is missing", () => {
    expect(getRelatedPosts([currentPost], null)).toEqual([]);
  });

  it("excludes the current post itself", () => {
    const result = getRelatedPosts([currentPost], currentPost);
    expect(result).toEqual([]);
  });

  it("excludes posts that share no category or tags (score of 0)", () => {
    const unrelated = { slug: "unrelated", category: "Travel", tags: ["hiking"] };
    expect(getRelatedPosts([unrelated], currentPost)).toEqual([]);
  });

  it("ranks a category+tag match above a category-only match", () => {
    const categoryOnly = { slug: "category-only", category: "Blog", tags: [] };
    const categoryAndTag = { slug: "category-and-tag", category: "Blog", tags: ["react"] };

    const result = getRelatedPosts([categoryOnly, categoryAndTag], currentPost);

    expect(result.map((p) => p.slug)).toEqual(["category-and-tag", "category-only"]);
  });

  it("respects the limit parameter", () => {
    const matches = Array.from({ length: 5 }, (_, i) => ({
      slug: `match-${i}`,
      category: "Blog",
      tags: [],
    }));

    const result = getRelatedPosts(matches, currentPost, 2);
    expect(result).toHaveLength(2);
  });
});

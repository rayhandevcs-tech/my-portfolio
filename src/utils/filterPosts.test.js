import { describe, it, expect } from "vitest";
import { filterPosts } from "./filterPosts";

const posts = [
  { title: "React Hooks Deep Dive", excerpt: "useEffect pitfalls", category: "Blog" },
  { title: "Consistency over Motivation", excerpt: "daily coding habits", category: "Productivity" },
  { title: "DSA Notes", excerpt: "binary search patterns", category: "DSA" },
];

describe("filterPosts", () => {
  it("returns every post when category is 'All' and there is no search term", () => {
    expect(filterPosts(posts, "All", "")).toEqual(posts);
  });

  it("filters by exact category match", () => {
    const result = filterPosts(posts, "DSA", "");
    expect(result).toEqual([posts[2]]);
  });

  it("filters by search term across title/excerpt/category, case-insensitively", () => {
    const result = filterPosts(posts, "All", "HOOKS");
    expect(result).toEqual([posts[0]]);
  });

  it("combines category and search filters", () => {
    const result = filterPosts(posts, "Productivity", "habits");
    expect(result).toEqual([posts[1]]);
  });

  it("returns an empty array when nothing matches the search term", () => {
    expect(filterPosts(posts, "All", "nonexistent")).toEqual([]);
  });
});

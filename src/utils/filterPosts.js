import { normalizeSearch } from "./normalizeSearch";

export function filterPosts(posts, category, searchTerm) {
  let result =
    category === "All"
      ? posts
      : posts.filter((post) => post.category === category);

  const query = normalizeSearch(searchTerm);

  if (query) {
    result = result.filter((post) =>
      [post.title, post.excerpt, post.category]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }

  return result;
}
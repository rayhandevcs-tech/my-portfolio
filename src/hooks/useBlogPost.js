import { getPostBySlug } from "../services/api/blogApi";

export function useBlogPost(slug) {
  const post = getPostBySlug(slug);

  return {
    post,
    notFound: !post,
  };
}
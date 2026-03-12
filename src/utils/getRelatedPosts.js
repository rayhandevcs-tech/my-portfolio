export function getRelatedPosts(posts, currentPost, limit = 3) {
  return posts
    .filter(
      (post) =>
        post.slug !== currentPost.slug &&
        post.category === currentPost.category
    )
    .slice(0, limit);
}
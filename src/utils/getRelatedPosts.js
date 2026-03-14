export function getRelatedPosts(allPosts, currentPost, limit = 3) {
  if (!Array.isArray(allPosts) || !currentPost) return [];

  const currentTags = Array.isArray(currentPost.tags) ? currentPost.tags : [];

  const scoredPosts = allPosts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => {
      let score = 0;

      if (post.category && post.category === currentPost.category) {
        score += 3;
      }

      if (Array.isArray(post.tags) && currentTags.length > 0) {
        const sharedTags = post.tags.filter((tag) => currentTags.includes(tag));
        score += sharedTags.length * 2;
      }

      return { ...post, _relatedScore: score };
    })
    .filter((post) => post._relatedScore > 0)
    .sort((a, b) => b._relatedScore - a._relatedScore);

  return scoredPosts.slice(0, limit);
}
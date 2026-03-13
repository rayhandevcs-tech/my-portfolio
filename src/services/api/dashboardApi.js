import { getToken } from "../../utils/auth";

export async function getDashboardStats() {
  const [postsRes, messagesRes] = await Promise.all([
    fetch("http://localhost:5000/api/posts/stats/summary", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }),
    fetch("http://localhost:5000/api/contact/stats/summary", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }),
  ]);

  const postsData = await postsRes.json();
  const messagesData = await messagesRes.json();

  if (!postsRes.ok) {
    throw new Error(postsData.message || "Failed to fetch post stats");
  }

  if (!messagesRes.ok) {
    throw new Error(messagesData.message || "Failed to fetch message stats");
  }

  return {
    totalPosts: postsData.data.totalPosts,
    featuredPosts: postsData.data.featuredPosts,
    totalViews: postsData.data.totalViews,
    mostViewedPost: postsData.data.mostViewedPost,
    totalMessages: messagesData.data.totalMessages,
  };
}
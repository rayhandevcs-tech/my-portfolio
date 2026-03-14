import { getToken } from "../../utils/auth";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getDashboardStats() {
  const token = getToken();

  const [postsRes, messagesRes] = await Promise.all([
    fetch(`${API_BASE_URL}/api/posts/stats/summary`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    fetch(`${API_BASE_URL}/api/contact/stats/summary`, {
      headers: {
        Authorization: `Bearer ${token}`,
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
    topViewedPosts: postsData.data.topViewedPosts || [],
    totalMessages: messagesData.data.totalMessages,
  };
}
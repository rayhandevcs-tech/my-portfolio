import { getToken } from "../../utils/auth";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/posts`;

async function parseResponse(response, fallbackMessage) {
  let data = null;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(data?.message || fallbackMessage);
  }

  return data;
}

export async function getAllPosts() {
  const response = await fetch(API_URL);
  const data = await parseResponse(response, "Failed to fetch posts");
  return data?.data || [];
}

export async function getAdminPosts() {
  const response = await fetch(`${API_URL}/admin/all`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  const data = await parseResponse(response, "Failed to fetch admin posts");
  return data?.data || [];
}

export async function getPostBySlug(slug) {
  const response = await fetch(`${API_URL}/slug/${slug}`);
  const data = await parseResponse(response, "Failed to fetch post");
  return data?.data || null;
}

export async function getRelatedPostsBySlug(slug, limit = 3) {
  const response = await fetch(`${API_URL}/slug/${slug}/related?limit=${limit}`);
  const data = await parseResponse(response, "Failed to fetch related posts");
  return data?.data || [];
}

export async function incrementPostViews(slug) {
  const response = await fetch(`${API_URL}/slug/${slug}/view`, {
    method: "PATCH",
  });

  const data = await parseResponse(response, "Failed to update views");
  return data?.data || null;
}

export async function getPostById(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  const data = await parseResponse(response, "Failed to fetch post");
  return data?.data || null;
}

export async function createPost(payload) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await parseResponse(response, "Failed to create post");
  return data?.data || null;
}

export async function updatePost(id, payload) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await parseResponse(response, "Failed to update post");
  return data?.data || null;
}

export async function deletePost(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return parseResponse(response, "Failed to delete post");
}

export async function toggleFeaturedPost(id) {
  const response = await fetch(`${API_URL}/${id}/featured`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  const data = await parseResponse(response, "Failed to toggle featured");
  return data?.data || null;
}
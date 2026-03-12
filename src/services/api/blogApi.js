import { getToken } from "../../utils/auth";

const API_URL = "http://localhost:5000/api/posts";

export async function getAllPosts() {
  const response = await fetch(API_URL);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch posts");
  }

  return data.data;
}

export async function getPostBySlug(slug) {
  const response = await fetch(`${API_URL}/slug/${slug}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch post");
  }

  return data.data;
}

export async function getPostById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch post");
  }

  return data.data;
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

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create post");
  }

  return data.data;
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

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update post");
  }

  return data.data;
}

export async function deletePost(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete post");
  }

  return data;
}

export async function toggleFeaturedPost(id) {
  const response = await fetch(`${API_URL}/${id}/featured`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to toggle featured");
  }

  return data.data;
}
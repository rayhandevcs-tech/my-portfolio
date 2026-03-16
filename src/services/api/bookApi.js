import { getToken } from "../../utils/auth";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/books`;

export async function getAllBooks() {
  const response = await fetch(API_URL);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch books");
  }

  return data.data;
}

export async function getAdminBooks() {
  const response = await fetch(`${API_URL}/admin/all`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch admin books");
  }

  return data.data;
}

export async function getBookBySlug(slug) {
  const response = await fetch(`${API_URL}/slug/${slug}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch book review");
  }

  return data.data;
}

export async function getBookById(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch book review");
  }

  return data.data;
}

export async function createBook(payload) {
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
    throw new Error(data.message || "Failed to create book review");
  }

  return data.data;
}

export async function updateBook(id, payload) {
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
    throw new Error(data.message || "Failed to update book review");
  }

  return data.data;
}

export async function deleteBook(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete book review");
  }

  return data;
}

export async function toggleFeaturedBook(id) {
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
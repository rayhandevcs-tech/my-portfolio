import { getToken } from "../../utils/auth";

export async function submitContactMessage(payload) {
  const response = await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to submit message");
  }

  return data;
}

export async function getContactMessages() {
  const response = await fetch("http://localhost:5000/api/contact", {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch messages");
  }

  return data.data;
}

export async function deleteContactMessage(id) {
  const response = await fetch(`http://localhost:5000/api/contact/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete message");
  }

  return data;
}
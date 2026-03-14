import { getToken } from "../../utils/auth";

const API_BASE = `${import.meta.env.VITE_API_BASE_URL}/api/upload`;

export async function uploadCoverImage(file) {
  const formData = new FormData();
  formData.append("image", file);

  const token = getToken();

  const response = await fetch(`${API_BASE}/image`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to upload image");
  }

  return data.data;
}
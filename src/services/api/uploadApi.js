export async function uploadCoverImage(file) {
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch("http://localhost:5000/api/upload/image", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to upload image");
  }

  return data.data;
}
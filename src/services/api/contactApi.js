export async function submitContactMessage(payload) {
  console.log("Contact payload:", payload);

  return {
    success: true,
    message: "Message submitted successfully",
  };
}
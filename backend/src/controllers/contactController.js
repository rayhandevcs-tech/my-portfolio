import { ContactMessage } from "../models/ContactMessage.js";

export async function submitContactMessage(req, res) {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newMessage = await ContactMessage.create({
      name,
      email,
      subject,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Message submitted successfully",
      data: newMessage,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to submit message",
      error: error.message,
    });
  }
}

export async function getContactMessages(req, res) {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch contact messages",
      error: error.message,
    });
  }
}
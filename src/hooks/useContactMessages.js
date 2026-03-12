import { useEffect, useState } from "react";
import {
  getAllContactMessages,
  deleteContactMessage,
} from "../services/api/contactApi";

export function useContactMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMessages() {
      try {
        setLoading(true);
        setError("");

        const response = await getAllContactMessages();
        setMessages(response.data || []);
      } catch (err) {
        setError(err.message || "Failed to load messages");
      } finally {
        setLoading(false);
      }
    }

    fetchMessages();
  }, []);

  async function removeMessage(id) {
    await deleteContactMessage(id);
    setMessages((prev) => prev.filter((message) => message._id !== id));
  }

  return {
    messages,
    loading,
    error,
    removeMessage,
  };
}
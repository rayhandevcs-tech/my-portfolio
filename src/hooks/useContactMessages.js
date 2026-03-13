import { useEffect, useState } from "react";
import {
  getContactMessages,
  deleteContactMessage,
} from "../services/api/contactApi";

export function useContactMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    try {
      setLoading(true);
      setError("");

      const data = await getContactMessages();
      setMessages(data || []);
    } catch (err) {
      setError(err.message || "Failed to load messages");
    } finally {
      setLoading(false);
    }
  }

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
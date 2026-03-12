import { useState } from "react";
import { useContactMessages } from "../../hooks/useContactMessages";
import PageHero from "../../components/common/PageHero/PageHero";
import "./AdminMessages.css";

function AdminMessages() {
  const { messages, loading, error, removeMessage } = useContactMessages();
  const [deletingId, setDeletingId] = useState("");
  const [actionError, setActionError] = useState("");

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmed) return;

    try {
      setActionError("");
      setDeletingId(id);
      await removeMessage(id);
    } catch (err) {
      setActionError(err.message || "Failed to delete message");
    } finally {
      setDeletingId("");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Admin"
        title="Admin Messages"
        intro="All contact form submissions are shown here."
      />

      <main className="section">
        <div className="container">
          {loading && <p>Loading messages...</p>}

          {error && <p className="admin-messages__error">{error}</p>}
          {actionError && <p className="admin-messages__error">{actionError}</p>}

          {!loading && !error && messages.length === 0 && (
            <p>No messages found.</p>
          )}

          {!loading && !error && messages.length > 0 && (
            <div className="admin-messages__table-wrap">
              <table className="admin-messages__table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {messages.map((message) => (
                    <tr key={message._id}>
                      <td>{message.name}</td>
                      <td>{message.email}</td>
                      <td>{message.subject}</td>
                      <td>{message.message}</td>
                      <td>
                        {new Date(message.createdAt).toLocaleString()}
                      </td>
                      <td>
                        <button
                          type="button"
                          className="admin-delete-btn"
                          onClick={() => handleDelete(message._id)}
                          disabled={deletingId === message._id}
                        >
                          {deletingId === message._id
                            ? "Deleting..."
                            : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default AdminMessages;
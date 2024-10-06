"use client";
import { useState, useEffect, FormEvent } from "react";

export default function FaultyChat() {
  const [showForm, setShowForm] = useState(true);
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setShowForm(false);
    sendMessage(message);
  }

  if (!showForm) {
    return (
      <div className="text-black">
        <h1>Thanks for using our services!</h1>
        <button
          onClick={() => {
            setMessage("");
            setShowForm(true);
          }}
        >
          Open chat
        </button>
      </div>
    );
  }

  return (
    <form className="text-black" onSubmit={handleSubmit}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" disabled={message === ""}>
        Send
      </button>
    </form>
  );
}

function sendMessage(message: string) {
  console.log("Sending message: " + message);
}

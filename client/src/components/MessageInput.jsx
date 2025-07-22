import React, { useState } from "react";

const MessageInput = ({ onSend, onTyping }) => {
  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
    onTyping && onTyping(e.target.value.length > 0);
  };

  const handleSend = e => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput("");
      onTyping && onTyping(false);
    }
  };

  return (
    <form onSubmit={handleSend}>
      <input
        value={input}
        onChange={handleChange}
        placeholder="Type a message..."
        autoComplete="off"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput; 
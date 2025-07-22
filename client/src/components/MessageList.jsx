import React from "react";

const MessageList = ({ messages, currentUser }) => (
  <div style={{ height: 300, overflowY: "auto", border: "1px solid #ccc", marginBottom: 10 }}>
    {messages.map(msg => (
      <div key={msg.id} style={{ color: msg.system ? "gray" : "black" }}>
        {msg.system ? (
          <i>{msg.message}</i>
        ) : (
          <span>
            <b>{msg.sender === currentUser ? "You" : msg.sender}:</b> {msg.message}
            {msg.isPrivate && <span style={{ color: "purple" }}> (private)</span>}
            {msg.read && <span style={{ color: "green" }}> ✓</span>}
          </span>
        )}
      </div>
    ))}
  </div>
);

export default MessageList; 
import React, { useContext, useState } from "react";
import { useSocket } from "../socket/socket";
import { UserContext } from "../context/UserContext";
import UserList from "../components/UserList";
import MessageList from "../components/MessageList";
import MessageInput from "../components/MessageInput";
import TypingIndicator from "../components/TypingIndicator";

const ChatPage = () => {
  const { user } = useContext(UserContext);
  const {
    users,
    messages,
    typingUsers,
    sendMessage,
    sendPrivateMessage,
    setTyping,
  } = useSocket();
  const [privateTo, setPrivateTo] = useState(null);

  const handleSend = (msg) => {
    if (privateTo && privateTo.id !== user.username) {
      sendPrivateMessage(privateTo.id, msg);
    } else {
      sendMessage(msg);
    }
  };

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <UserList
        users={users}
        onSelectUser={setPrivateTo}
        currentUser={user.username}
      />
      <div style={{ flex: 1 }}>
        <MessageList messages={messages} currentUser={user.username} />
        <TypingIndicator typingUsers={typingUsers} currentUser={user.username} />
        <MessageInput onSend={handleSend} onTyping={setTyping} />
        {privateTo && privateTo.username !== user.username && (
          <div>
            <small>Sending private message to {privateTo.username}</small>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage; 
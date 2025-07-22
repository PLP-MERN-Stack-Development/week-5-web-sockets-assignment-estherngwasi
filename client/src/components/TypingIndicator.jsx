import React from "react";
const TypingIndicator = ({ typingUsers, currentUser }) => {
  const others = typingUsers.filter(u => u !== currentUser);
  if (!others.length) return null;
  return <div>{others.join(", ")} typing...</div>;
};
export default TypingIndicator; 
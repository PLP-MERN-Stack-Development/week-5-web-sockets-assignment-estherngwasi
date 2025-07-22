import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useSocket } from "../socket/socket";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const { setUser } = useContext(UserContext);
  const { connect } = useSocket();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setUser({ username });
      connect(username);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      <button type="submit">Join Chat</button>
    </form>
  );
};

export default LoginForm; 
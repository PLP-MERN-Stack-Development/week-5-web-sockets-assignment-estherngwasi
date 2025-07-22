import React from "react";

const UserList = ({ users, onSelectUser, currentUser }) => (
  <div>
    <h3>Users</h3>
    <ul>
      {users.map(u => (
        <li
          key={u.id}
          onClick={() => onSelectUser && onSelectUser(u)}
          style={{ fontWeight: u.username === currentUser ? "bold" : "normal" }}
        >
          {u.username} {u.username === currentUser ? "(You)" : ""}
        </li>
      ))}
    </ul>
  </div>
);

export default UserList; 
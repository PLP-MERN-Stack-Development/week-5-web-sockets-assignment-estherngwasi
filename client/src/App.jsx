import React, { useContext } from "react";
import { UserProvider, UserContext } from "./context/UserContext";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";

const AppContent = () => {
  const { user } = useContext(UserContext);
  return user ? <ChatPage /> : <LoginPage />;
};

const App = () => (
  <UserProvider>
    <AppContent />
  </UserProvider>
);

export default App; 
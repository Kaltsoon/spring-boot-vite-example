import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import AppBar from "../components/AppBar";
import MessageList from "./MessageList";
import AddMessage from "./AddMessage";
import Login from "./Login";
import Register from "./Register";
import { getAuthenticatedUser } from "../services/user";

export default function RouterRoot() {
  const [user, setUser] = useState();

  useEffect(() => {
    getAuthenticatedUser().then((user) => setUser(user));
  }, []);

  return (
    <BrowserRouter>
      <AppBar user={user} />
      <Container sx={{ marginY: 4 }}>
        <Routes>
          <Route path="/" element={<MessageList />} />
          <Route path="messages/add" element={<AddMessage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

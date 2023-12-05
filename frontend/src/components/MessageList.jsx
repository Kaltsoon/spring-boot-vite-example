import { useEffect, useState } from "react";
import { Typography, Button, Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { getAllMessages } from "../services/messageService";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";

export default function MessageList() {
  const [messages, setMessages] = useState([]);
  const { authenticatedUser } = useAuthenticatedUser();

  useEffect(() => {
    getAllMessages().then((messages) => {
      setMessages(messages);
    });
  }, []);

  return (
    <>
      <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
        Messages
      </Typography>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>

      <Box sx={{ marginTop: 2 }}>
        {authenticatedUser ? (
          <Button component={RouterLink} to="/messages/add" variant="contained">
            Add a message
          </Button>
        ) : (
          <Typography>
            <Link component={RouterLink} to="/register">
              Register
            </Link>{" "}
            or{" "}
            <Link component={RouterLink} to="/login">
              login
            </Link>{" "}
            to add messages.
          </Typography>
        )}
      </Box>
    </>
  );
}

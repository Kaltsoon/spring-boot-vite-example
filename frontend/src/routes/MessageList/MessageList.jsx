import { Typography, Button, Box, Link } from "@mui/material";
import { Link as RouterLink, useLoaderData } from "react-router-dom";

export default function MessageList() {
  const { messages, user } = useLoaderData();

  return (
    <>
      <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
        Messages
      </Typography>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            {message.user?.username}: {message.content}
          </li>
        ))}
      </ul>

      <Box sx={{ marginTop: 2 }}>
        {user ? (
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

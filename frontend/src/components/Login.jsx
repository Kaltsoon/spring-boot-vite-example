import { useState } from "react";
import { Typography, Button, Box, TextField, Alert } from "@mui/material";
import { useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/userService";

export default function Login() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [error, setError] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmitLogin(event) {
    event.preventDefault();

    login({ username, password })
      .then(() => {
        queryClient.invalidateQueries()
        navigate("/");
      })
      .catch((error) => {
        if (error.response.data) {
          setError(error.response.data.message);
        }
      });
  }

  return (
    <>
      <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
        Login
      </Typography>
      {error && (
        <Alert
          severity="error"
          sx={{ marginBottom: 2 }}
          onClose={() => setError(null)}
        >
          {error}
        </Alert>
      )}
      <form onSubmit={handleSubmitLogin}>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
            fullWidth
          />
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            fullWidth
          />
        </Box>

        <Box>
          <Button type="submit" variant="contained" sx={{ marginRight: 1 }}>
            Login
          </Button>
          <Button component={Link} to="/">
            Cancel
          </Button>
        </Box>
      </form>
    </>
  );
}

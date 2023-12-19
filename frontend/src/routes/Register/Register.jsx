import { useState } from "react";
import { Typography, Button, Box, TextField, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../services/user";

export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmitRegister(event) {
    event.preventDefault();

    createUser({ username, password })
      .then(() => {
        navigate("/login");
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
        Register
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
      <form onSubmit={handleSubmitRegister}>
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
            Register
          </Button>
          <Button component={Link} to="/">
            Cancel
          </Button>
        </Box>
      </form>
    </>
  );
}

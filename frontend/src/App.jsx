import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import { QueryClientProvider, QueryClient } from "react-query";
import MessageList from "./components/MessageList";
import AddMessage from "./components/AddMessage";
import Login from "./components/Login";
import AppBar from "./components/AppBar";
import Register from "./components/Register";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename={import.meta.env.VITE_ROUTER_BASENAME}>
          <>
            <AppBar />
            <Container sx={{ marginY: 2 }}>
              <Routes>
                <Route path="/" element={<MessageList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/messages/add" element={<AddMessage />} />
              </Routes>
            </Container>
          </>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;

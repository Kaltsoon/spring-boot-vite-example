import { Suspense } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { CssBaseline } from "@mui/material";

import Root, { rootLoader } from "./routes/Root";
import MessageList, { messageListLoader } from "./routes/MessageList";
import AddMessage from "./routes/AddMessage";
import Login from "./routes/Login";
import Register from "./routes/Register";
import RouteProgress from "./components/RouteProgress";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} loader={rootLoader}>
      <Route index element={<MessageList />} loader={messageListLoader} />
      <Route path="messages/add" element={<AddMessage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <CssBaseline />
      <Suspense fallback={<RouteProgress />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;

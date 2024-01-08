import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Root, { rootLoader } from "./Root";
import MessageList, { messageListLoader } from "./MessageList";
import AddMessage from "./AddMessage";
import Login from "./Login";
import Register from "./Register";

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

export default router;

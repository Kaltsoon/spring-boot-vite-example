import { getAllMessages } from "../../services/message";
import { getAuthenticatedUser } from "../../services/user";

export default async function messageListLoader() {
  const [messages, user] = await Promise.all([
    getAllMessages(),
    getAuthenticatedUser(),
  ]);

  return { messages, user };
}

import { getAuthenticatedUser } from "../../services/user";

export default async function rootLoader() {
  const user = await getAuthenticatedUser();

  return { user };
}

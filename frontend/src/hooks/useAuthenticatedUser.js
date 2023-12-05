import { useQuery } from "react-query";

import { getAuthenticatedUser } from "../services/userService";

export default function useAuthenticatedUser() {
  const { data, ...rest } = useQuery({
    queryKey: "authenticatedUser",
    queryFn: () => getAuthenticatedUser().catch(() => null),
  });

  return { authenticatedUser: data, ...rest };
}

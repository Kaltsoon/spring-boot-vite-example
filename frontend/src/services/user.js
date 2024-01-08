import { apiClient, setAccessToken, removeAccessToken } from "./api";

export function login(credentials) {
  return apiClient.post("/api/auth/login", credentials).then((response) => {
    if (response.data.accessToken) {
      setAccessToken(response.data.accessToken);
    }

    return response.data;
  });
}

export function logout() {
  removeAccessToken();
}

export function createUser(user) {
  return apiClient.post("/api/users", user).then((response) => response.data);
}

export function getAuthenticatedUser() {
  return apiClient
    .get("/api/users/current")
    .then((response) => response.data)
    .catch((error) => {
      const status = error.response?.status;

      if (status === 403 || status === 401) {
        return null;
      }

      throw error;
    });
}

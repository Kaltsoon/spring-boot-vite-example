import {
  apiClient,
  setAuthenticationToken,
  removeAuthenticationToken,
} from "./apiService";

export function login(credentials) {
  return apiClient.post("/api/auth/login", credentials).then((response) => {
    if (response.data.accessToken) {
      setAuthenticationToken(response.data.accessToken);
    }

    return response.data;
  });
}

export function logout() {
  removeAuthenticationToken();
}

export function createUser(user) {
  return apiClient.post("/api/users", user).then((response) => response.data);
}

export function getAuthenticatedUser() {
  return apiClient.get("/api/users/current").then((response) => response.data);
}

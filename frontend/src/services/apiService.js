import axios from "axios";

export function setAuthenticationToken(token) {
  localStorage.setItem("AUTH_TOKEN", token);
}

export function removeAuthenticationToken() {
  localStorage.removeItem("AUTH_TOKEN");
}

export function getAuthenticationToken() {
  return localStorage.getItem("AUTH_TOKEN");
}

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

apiClient.interceptors.request.use((config) => {
  const token = getAuthenticationToken();

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

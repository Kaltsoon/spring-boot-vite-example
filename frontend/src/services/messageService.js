import { apiClient } from "./apiService";

export function getAllMessages() {
  return apiClient.get("/api/messages").then((response) => response.data);
}

export function createMessage(message) {
  return apiClient.post("/api/messages", message).then((response) => response.data);
}

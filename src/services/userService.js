// services/userService.js
import api from "./api";

export const userService = {
  getProfile: () => api.get("/user/profile"),

  updateSettings: (data) => api.put("/user/settings", data)
};

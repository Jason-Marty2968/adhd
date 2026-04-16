import api from "./api";

export const taskService = {
  getTasks: () => api.get("/tasks/"),

  getTask: (id) => api.get(`/tasks/${id}/`),

  createTask: (data) => api.post("/tasks/", data),

  updateTask: (id, data) => api.put(`/tasks/${id}/`, data),

  deleteTask: (id) => api.delete(`/tasks/${id}/`),

  addSubtask: (taskId, data) =>
    api.post(`/tasks/${taskId}/subtasks/`, data),

  updateSubtask: (taskId, subtaskId, data) =>
    api.put(`/tasks/${taskId}/subtasks/${subtaskId}/`, data),

  deleteSubtask: (taskId, subtaskId) =>
    api.delete(`/tasks/${taskId}/subtasks/${subtaskId}/`)
};

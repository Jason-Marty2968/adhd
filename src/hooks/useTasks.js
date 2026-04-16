// hooks/useTasks.js
import { useState, useEffect } from "react";
import { taskService } from "../services/taskService";
import { autoChunkTask } from "../utils/chunkingUtils";

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    setLoading(true);
    const res = await taskService.getTasks();
    setTasks(res.data);
    setLoading(false);
  };

  const createTask = async (data) => {
    const res = await taskService.createTask(data);
    await loadTasks();
    return res.data;
  };

  const updateTask = async (id, data) => {
    await taskService.updateTask(id, data);
    await loadTasks();
  };

  const deleteTask = async (id) => {
    await taskService.deleteTask(id);
    await loadTasks();
  };

  const addSubtasksFromDescription = async (taskId, description) => {
    const chunks = autoChunkTask(description);
    for (const chunk of chunks) {
      await taskService.addSubtask(taskId, chunk);
    }
    await loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return {
    tasks,
    loading,
    createTask,
    updateTask,
    deleteTask,
    addSubtasksFromDescription,
    reload: loadTasks
  };
}

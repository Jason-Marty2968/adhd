// context/TaskContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { taskService } from "../services/taskService";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    setLoading(true);
    const res = await taskService.getTasks();
    setTasks(res.data);
    setLoading(false);
  };

  const createTask = async (data) => {
    await taskService.createTask(data);
    await loadTasks();
  };

  const updateTask = async (id, data) => {
    await taskService.updateTask(id, data);
    await loadTasks();
  };

  const deleteTask = async (id) => {
    await taskService.deleteTask(id);
    await loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        createTask,
        updateTask,
        deleteTask,
        reload: loadTasks
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}

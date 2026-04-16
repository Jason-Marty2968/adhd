// components/Dashboard/QuickAddTask.jsx
import React, { useState } from "react";
import { useTaskContext } from "../../context/TaskContext";
import "./dashboard.css";

export default function QuickAddTask() {
  const { createTask } = useTaskContext();
  const [title, setTitle] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    await createTask({ title, status: "inbox" });
    setTitle("");
  };

  return (
    <form className="quick-add" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="What's on your mind?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

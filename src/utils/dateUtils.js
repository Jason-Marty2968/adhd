// utils/dateUtils.js

// Format a date into "Apr 16, 2026"
export function formatDate(date) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

// Returns true if the date is today
export function isToday(date) {
  const d = new Date(date);
  const now = new Date();
  return (
    d.getFullYear() === now.getFullYear() &&
    d.getMonth() === now.getMonth() &&
    d.getDate() === now.getDate()
  );
}

// Returns true if the date is in the past
export function isOverdue(date) {
  const today = new Date();
  const d = new Date(date);
  return d < today && !isToday(date);
}

// Sort tasks by due date ascending
export function sortByDueDate(tasks) {
  return [...tasks].sort((a, b) => {
    const da = new Date(a.dueDate);
    const db = new Date(b.dueDate);
    return da - db;
  });
}

// Get "days until due"
export function daysUntil(date) {
  const now = new Date();
  const d = new Date(date);
  const diff = d - now;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

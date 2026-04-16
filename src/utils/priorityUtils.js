// utils/priorityUtils.js

import { daysUntil, isOverdue } from "./dateUtils.js";

// Assign a numeric urgency score
// Lower = more urgent
export function getUrgencyScore(task) {
  if (!task.dueDate) return 999;

  if (isOverdue(task.dueDate)) return 0;

  const days = daysUntil(task.dueDate);

  if (days <= 1) return 1;
  if (days <= 3) return 2;
  if (days <= 7) return 3;

  return 5;
}

// Sort tasks by urgency
export function sortByUrgency(tasks) {
  return [...tasks].sort((a, b) => {
    return getUrgencyScore(a) - getUrgencyScore(b);
  });
}

// Label urgency for UI
export function getUrgencyLabel(task) {
  const score = getUrgencyScore(task);

  if (score === 0) return "Overdue";
  if (score === 1) return "Due Soon";
  if (score === 2) return "Approaching";
  if (score === 3) return "This Week";

  return "Later";
}

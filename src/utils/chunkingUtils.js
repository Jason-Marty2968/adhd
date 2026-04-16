// utils/chunkingUtils.js

// Break a long task description into micro-steps
export function autoChunkTask(description) {
  if (!description) return [];

  // Basic heuristic chunking
  const verbs = ["write", "read", "study", "research", "review", "draft"];
  const words = description.toLowerCase().split(" ");

  const chunks = [];
  let buffer = [];

  for (let word of words) {
    buffer.push(word);

    // If we hit a verb or sentence-like boundary, create a chunk
    if (verbs.includes(word) || buffer.length >= 6) {
      chunks.push(buffer.join(" "));
      buffer = [];
    }
  }

  if (buffer.length > 0) {
    chunks.push(buffer.join(" "));
  }

  return chunks.map((c, i) => ({
    id: i + 1,
    title: capitalize(c),
    completed: false
  }));
}

// Capitalize helper
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Convert subtasks into a progress percentage
export function getChunkProgress(subtasks) {
  if (!subtasks || subtasks.length === 0) return 0;
  const done = subtasks.filter((s) => s.completed).length;
  return Math.round((done / subtasks.length) * 100);
}

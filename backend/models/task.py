# backend/models/task.py
from pydantic import BaseModel
from typing import List, Optional

class Subtask(BaseModel):
  id: int
  title: str
  completed: bool = False

class Task(BaseModel):
    title: str
    dueDate: Optional[str] = None
    subtasks: List[Subtask] = []

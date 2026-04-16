# backend/models/reminder.py
from pydantic import BaseModel
from typing import Optional

class Reminder(BaseModel):
  id: int
  text: str
  time: Optional[str] = None
  done: bool = False

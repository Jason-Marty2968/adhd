# backend/models/calendar.py
from pydantic import BaseModel
from typing import Optional

class CalendarEvent(BaseModel):
  id: int
  title: str
  start: str
  end: str
  source: Optional[str] = None

# backend/models/summary.py
from pydantic import BaseModel
from typing import List, Optional

class Summary(BaseModel):
  text: Optional[str] = None
  items: List[str] = []

class SummaryHistoryItem(BaseModel):
  id: int
  date: str
  type: Optional[str] = None
  text: Optional[str] = None

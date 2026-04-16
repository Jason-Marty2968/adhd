# backend/routers/reminders.py
from fastapi import APIRouter, HTTPException
from typing import List
from backend.models.reminder import Reminder

router = APIRouter()

reminders_db: List[Reminder] = []

@router.get("/", response_model=List[Reminder])
def get_reminders():
  return reminders_db

@router.post("/", response_model=Reminder)
def create_reminder(reminder: Reminder):
  reminders_db.append(reminder)
  return reminder

@router.put("/{reminder_id}", response_model=Reminder)
def update_reminder(reminder_id: int, updated: Reminder):
  for i, r in enumerate(reminders_db):
    if r.id == reminder_id:
      reminders_db[i] = updated
      return updated
  raise HTTPException(status_code=404, detail="Reminder not found")

@router.delete("/{reminder_id}")
def delete_reminder(reminder_id: int):
  global reminders_db
  reminders_db = [r for r in reminders_db if r.id != reminder_id]
  return {"status": "deleted"}

# backend/routers/calendar.py
from fastapi import APIRouter
from typing import List
from backend.models.calendar import CalendarEvent

router = APIRouter()

events_db: List[CalendarEvent] = []

@router.get("/events", response_model=List[CalendarEvent])
def get_events():
  return events_db

@router.post("/sync")
def sync_calendar():
  # placeholder for future Microsoft Graph sync
  return {"status": "synced"}

@router.get("/free-blocks")
def get_free_blocks():
  # placeholder structure
  return []

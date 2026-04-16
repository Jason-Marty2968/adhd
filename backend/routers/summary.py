# backend/routers/summary.py
from fastapi import APIRouter
from typing import List
from backend.models.summary import Summary, SummaryHistoryItem

router = APIRouter()

daily_summary = Summary(text="Daily summary placeholder", items=[])
weekly_summary = Summary(text="Weekly summary placeholder", items=[])
history_db: List[SummaryHistoryItem] = []

@router.get("/daily", response_model=Summary)
def get_daily():
  return daily_summary

@router.get("/weekly", response_model=Summary)
def get_weekly():
  return weekly_summary

@router.get("/history", response_model=List[SummaryHistoryItem])
def get_history():
  return history_db

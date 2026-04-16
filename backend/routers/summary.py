# backend/routers/summary.py
from fastapi import APIRouter, Depends
from typing import List
from datetime import datetime, timedelta

from backend.models.summary import Summary, SummaryHistoryItem
from backend.routers.tasks import get_all_tasks  # <-- import your task getter

router = APIRouter()

history_db: List[SummaryHistoryItem] = []


def generate_daily_summary(tasks):
    today = datetime.now().date()
    todays_tasks = [t for t in tasks if t.created_at.date() == today]

    if not todays_tasks:
        return Summary(text="No tasks created today.", items=[])

    items = [f"{t.title} (status: {t.status})" for t in todays_tasks]
    text = f"You created {len(todays_tasks)} tasks today."

    return Summary(text=text, items=items)


def generate_weekly_summary(tasks):
    today = datetime.now().date()
    week_ago = today - timedelta(days=7)

    weekly_tasks = [t for t in tasks if t.created_at.date() >= week_ago]

    if not weekly_tasks:
        return Summary(text="No tasks created this week.", items=[])

    items = [f"{t.title} (status: {t.status})" for t in weekly_tasks]
    text = f"You created {len(weekly_tasks)} tasks this week."

    return Summary(text=text, items=items)


@router.get("/daily", response_model=Summary)
def get_daily(tasks=Depends(get_all_tasks)):
    summary = generate_daily_summary(tasks)
    return summary


@router.get("/weekly", response_model=Summary)
def get_weekly(tasks=Depends(get_all_tasks)):
    summary = generate_weekly_summary(tasks)
    return summary


@router.get("/history", response_model=List[SummaryHistoryItem])
def get_history():
    return history_db

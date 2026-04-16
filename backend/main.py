# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.routers import tasks, reminders, summary, user, calendar

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://localhost:5174",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(tasks.router, prefix="/api/tasks", tags=["tasks"])
app.include_router(reminders.router, prefix="/api/reminders", tags=["reminders"])
app.include_router(summary.router, prefix="/api/summary", tags=["summary"])
app.include_router(user.router, prefix="/api/user", tags=["user"])
app.include_router(calendar.router, prefix="/api/calendar", tags=["calendar"])

@app.get("/")
def root():
    return {"message": "Backend running"}

from fastapi import APIRouter, HTTPException
from backend.models.task import Task

router = APIRouter()

tasks_db = []


@router.get("/")
def get_tasks():
    return tasks_db


@router.post("/")
def create_task(task: Task):
    new_task = {
        "id": len(tasks_db) + 1,
        "title": task.title,
        "dueDate": task.dueDate,
        "subtasks": task.subtasks
    }
    tasks_db.append(new_task)
    return new_task


@router.put("/{task_id}/")
def update_task(task_id: int, task: Task):
    for i, t in enumerate(tasks_db):
        if t["id"] == task_id:
            updated = {
                "id": task_id,
                "title": task.title,
                "dueDate": task.dueDate,
                "subtasks": task.subtasks
            }
            tasks_db[i] = updated
            return updated

    raise HTTPException(status_code=404, detail="Task not found")


@router.delete("/{task_id}/")
def delete_task(task_id: int):
    for i, t in enumerate(tasks_db):
        if t["id"] == task_id:
            tasks_db.pop(i)
            return {"message": "Task deleted"}

    raise HTTPException(status_code=404, detail="Task not found")

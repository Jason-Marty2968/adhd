# backend/routers/user.py
# type: ignore
from fastapi import APIRouter
from backend.models.user import UserProfile

router = APIRouter()

profile = UserProfile(name="Jason", email="placeholder@example.com")

@router.get("/profile", response_model=UserProfile)
def get_profile():
  return profile

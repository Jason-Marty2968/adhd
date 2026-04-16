ADHD Assistant Backend

A FastAPI backend that powers an ADHD‑friendly productivity assistant.
It handles tasks, reminders, summaries, calendar events, and AI‑generated daily/weekly recaps using Google Gemini.
✨ Features

    Task Management — create, update, delete, and list tasks

    Reminders — store reminders and fetch upcoming ones

    AI Summaries — daily/weekly summaries generated using Google Gemini

    Calendar Events — add and retrieve events

    User Profiles — simple user model for linking data

    Modular Routing — clean separation of API endpoints


Gif Walkthrough

![App Demo](./public/2026-04-16%2019-23-02.gif)

📁 Project Structure
Code

backend/
│
├── main.py               # FastAPI entrypoint
├── ai_client.py          # Gemini AI summary generator
│
├── routers/              # API route handlers
│   ├── tasks.py
│   ├── reminders.py
│   ├── summary.py
│   ├── calendar.py
│   └── user.py
│
└── models/               # Pydantic models
    ├── task.py
    ├── reminder.py
    ├── summary.py
    ├── calendar.py
    └── user.py

🚀 Getting Started
1. Clone the repository
bash

git clone https://github.com/Jason-Marty2968/adhd.git
cd adhd

2. Create and activate a virtual environment
bash

python -m venv venv

Windows:
bash

venv\Scripts\activate

Mac/Linux:
bash

source venv/bin/activate

3. Install dependencies
bash

pip install -r requirements.txt

If you don’t have a requirements file yet:
bash

pip install fastapi uvicorn google-generativeai python-dotenv

4. Add your Gemini API key

Create a .env file in the project root:
Code

GEMINI_API_KEY=your_key_here

5. Run the server
bash

uvicorn backend.main:app --reload --port 8000

📡 API Documentation

FastAPI automatically generates interactive docs:
Code

http://localhost:8000/docs

You can test every endpoint directly from the browser.
🤖 AI Summary Generation

The backend uses Google Gemini via google-generativeai to generate:

    Daily summaries

    Weekly summaries

    Task breakdowns

    Productivity insights

The logic lives in:
Code

backend/ai_client.py

🧩 Contributing

Pull requests are welcome.
For major changes, open an issue first to discuss what you’d like to modify.

📄 License

MIT License

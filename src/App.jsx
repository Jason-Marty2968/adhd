// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { TaskProvider } from "./context/TaskContext";
import { UserProvider } from "./context/UserContext";
import { SettingsProvider } from "./context/SettingsContext";

import DashboardPage from "./pages/DashboardPage";
import TasksPage from "./pages/TasksPage";
import CalendarPage from "./pages/CalendarPage";
import SummariesPage from "./pages/SummariesPage";
import SettingsPage from "./pages/SettingsPage";

import Sidebar from "./components/Sidebar";

import "./styles/globals.css";

export default function App() {
  return (
    <UserProvider>
      <SettingsProvider>
        <TaskProvider>
          <Router>
            <div className="app-layout">
              <Sidebar />

              <div className="page-content">
                <Routes>
                  <Route path="/" element={<DashboardPage />} />
                  <Route path="/tasks" element={<TasksPage />} />
                  <Route path="/calendar" element={<CalendarPage />} />
                  <Route path="/summaries" element={<SummariesPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                </Routes>
              </div>
            </div>
          </Router>
        </TaskProvider>
      </SettingsProvider>
    </UserProvider>
  );
}

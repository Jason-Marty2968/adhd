// pages/SettingsPage.jsx
import React from "react";
import MicrosoftGraphConnect from "../components/Integrations/MicrosoftGraphConnect";
import CalendarConnect from "../components/Integrations/CalendarConnect";
import ReminderSettings from "../components/Reminders/ReminderSettings";
import "./pages.css";

export default function SettingsPage() {
  return (
    <div className="page settings-page">
      <h1>Settings</h1>

      <MicrosoftGraphConnect />
      <CalendarConnect />
      <ReminderSettings />
    </div>
  );
}

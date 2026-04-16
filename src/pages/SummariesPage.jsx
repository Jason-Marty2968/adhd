// pages/SummariesPage.jsx
import React from "react";
import WeeklySummary from "../components/Summaries/WeeklySummary";
import SummaryHistory from "../components/Summaries/SummaryHistory";
import "./pages.css";

export default function SummariesPage() {
  return (
    <div className="page summaries-page">
      <h1>Summaries</h1>
      <WeeklySummary />
      <SummaryHistory />
    </div>
  );
}

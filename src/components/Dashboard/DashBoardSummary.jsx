// components/Dashboard/DashboardSummary.jsx
import React from "react";
import { useSummary } from "../../hooks/useSummary";
import SummaryCard from "./SummaryCard";
import "./dashboard.css";

export default function DashboardSummary() {
  const { daily, weekly, loading } = useSummary();

  if (loading) return <p>Loading summary...</p>;

  return (
    <div className="dashboard-summary">
      <h2>Today's Summary</h2>
      <SummaryCard title="Daily Overview" data={daily} />

      <h2>This Week</h2>
      <SummaryCard title="Weekly Overview" data={weekly} />
    </div>
  );
}

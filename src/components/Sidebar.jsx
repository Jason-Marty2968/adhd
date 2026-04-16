import { NavLink } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">ADHD App</h2>

      <nav className="sidebar-nav">
        <NavLink to="/" className="nav-item">
          Dashboard
        </NavLink>

        <NavLink to="/tasks" className="nav-item">
          Tasks
        </NavLink>

        <NavLink to="/calendar" className="nav-item">
          Calendar
        </NavLink>

        <NavLink to="/summaries" className="nav-item">
          Summaries
        </NavLink>

        <NavLink to="/settings" className="nav-item">
          Settings
        </NavLink>
      </nav>
    </div>
  );
}

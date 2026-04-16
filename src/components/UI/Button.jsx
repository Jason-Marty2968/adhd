// components/UI/Button.jsx
import React from "react";
import "./ui.css";

export default function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  type = "button"
}) {
  return (
    <button
      className={`ui-btn ${variant}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

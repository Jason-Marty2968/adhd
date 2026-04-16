// components/UI/Modal.jsx
import React from "react";
import "./ui.css";

export default function Modal({ children, onClose }) {
  return (
    <div className="ui-modal-backdrop" onClick={onClose}>
      <div
        className="ui-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

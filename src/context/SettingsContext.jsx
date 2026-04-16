// context/SettingsContext.jsx
import { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    theme: "light",
    reminderStrength: "normal",
    showCompletedTasks: true,
    focusMode: false
  });

  const updateSetting = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSetting,
        toggleSetting
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettingsContext() {
  return useContext(SettingsContext);
}

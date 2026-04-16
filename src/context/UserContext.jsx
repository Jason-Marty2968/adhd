// context/UserContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { userService } from "../services/userService";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    setLoading(true);
    try {
      const res = await userService.getProfile();
      setUser(res.data);
    } catch {
      setUser(null);
    }
    setLoading(false);
  };

  const updateSettings = async (data) => {
    await userService.updateSettings(data);
    await loadUser();
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        updateSettings,
        reload: loadUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}

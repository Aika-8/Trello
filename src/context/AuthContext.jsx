import React, { createContext, useContext, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(localStorage.getItem("email" || ""));
  const logout = () => {
    setEmail("");
    localStorage.removeItem("email"); 
  };
  return (
    <AuthContext.Provider value={{ email, setEmail, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);

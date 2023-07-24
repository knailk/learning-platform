import React, { useState, useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext();

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const value = {
    authUser,
    setAuthUser,
    isLogin,
    setIsLogin,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider, useAuth };

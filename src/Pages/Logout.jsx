import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Stores/auth";

export const Logout = () => {
  const { LogoutUser } = useAuth();

  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);

  return <Navigate to="/login" />;
};

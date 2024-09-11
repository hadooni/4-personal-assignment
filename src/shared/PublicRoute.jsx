import { useContext } from "react";
import { AuthContext } from "../api/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;

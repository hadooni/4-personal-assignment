import { useContext } from "react";
import { AuthContext } from "../api/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? <Navigate to="/signin" /> : <Outlet />;
};

export default PrivateRoute;

import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { toast } from "react-toastify";

const ProtectedRoute = () => {
  const { token } = useContext(StoreContext);
  if (!token) {
    if (location.pathname === "/menu") {
      toast.error("Please login or create account to view the menu");
    } else {
      toast.error("Please login or create account to continue");
    }

    return <Navigate to="/welcome" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

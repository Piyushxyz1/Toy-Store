import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const ProtectedRoute = () => {
  const { token } = useContext(StoreContext);
  if (!token) {
    if (location.pathname === "/menu") {
      toast.error("Please login to view the menu");
    } else {
      toast.error("Please login to continue");
    }

    return <Navigate to="/welcome" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

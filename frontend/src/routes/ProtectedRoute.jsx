import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(StoreContext);

  if (!token) {
    return <Navigate to="/welcome" replace />;
  }

  return children;
};

export default ProtectedRoute;
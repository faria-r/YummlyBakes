import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Loading from "../../Components/Loading/Loading";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default PrivateRoute;

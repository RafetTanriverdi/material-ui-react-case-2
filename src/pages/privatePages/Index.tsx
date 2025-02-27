import { Navigate, Outlet } from "react-router-dom";

const Index = () => {
  const isAuthenticated =true;
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default Index;

import { checkUserAuthentication } from "@rt/authentication/auth-utils";
import AuthLayout from "@rt/layouts/AuthLayout/AuthLayout";
import { getRoutePath } from "@rt/routes/routes";
import { ROUTES_ID } from "@rt/routes/routes-id";
import { Navigate, Outlet } from "react-router-dom";

const Index = () => {
  const isAuthenticated = checkUserAuthentication();
  if (isAuthenticated) {
    return <Navigate to={getRoutePath(ROUTES_ID.dashboard)} replace />;
  }
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};

export default Index;

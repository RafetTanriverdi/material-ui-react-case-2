import { checkUserAuthentication } from "@rt/authentication/auth-utils";
import PrivateLayout from "@rt/layouts/PrivateLayout/PrivateLayout";
import { getRoutePath } from "@rt/routes/routes";
import { ROUTES_ID } from "@rt/routes/routes-id";
import { Navigate, Outlet } from "react-router-dom";

const Index = () => {
  const isAuthenticated = checkUserAuthentication();
  if (!isAuthenticated) {
    return <Navigate to={getRoutePath(ROUTES_ID.login)} replace />;
  }
  return (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  );
};

export default Index;

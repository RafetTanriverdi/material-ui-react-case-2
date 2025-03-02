import { DynamicHelmet } from "@rt/components/Helmet/Helmet";
import LoginForm from "@rt/pages/publicPages/LoginPage/page-components/LoginForm/LoginForm";
import { RouteType } from "@rt/routes/routes";
import React from "react";

interface LoginPageProps {
  routeData: RouteType;
}

const LoginPage: React.FC<LoginPageProps> = ({ routeData }) => {
  return (
    <>
      <DynamicHelmet title={routeData.title} />
      <LoginForm />
    </>
  );
};

export default LoginPage;

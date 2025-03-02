import { DynamicHelmet } from "@rt/components/Helmet/Helmet";
import RegisterForm from "@rt/pages/publicPages/RegisterPage/page-components/RegisterForm/RegisterForm";
import { RouteType } from "@rt/routes/routes";
import React from "react";

interface RegisterPageProps {
  routeData: RouteType;
}
const RegisterPage: React.FC<RegisterPageProps> = ({ routeData }) => {
  return (
    <>
      <DynamicHelmet title={routeData.title} />
      <RegisterForm />
    </>
  );
};

export default RegisterPage;

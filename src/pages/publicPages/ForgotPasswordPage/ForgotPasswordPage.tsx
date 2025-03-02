import { DynamicHelmet } from "@rt/components/Helmet/Helmet";
import ForgotPasswordForm from "@rt/pages/publicPages/ForgotPasswordPage/page-components/Form/ForgotPasswordForm";
import { RouteType } from "@rt/routes/routes";
import React from "react";

interface ForgotPasswordPageProps {
  routeData: RouteType;
}

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({
  routeData,
}) => {
  return (
    <>
 <DynamicHelmet title={routeData.title} />
      <ForgotPasswordForm />
    </>
  );
};

export default ForgotPasswordPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRoutePath } from "@rt/routes/routes";
import { ROUTES_ID } from "@rt/routes/routes-id";
import { Stepper, Step, StepLabel, Typography, Stack } from "@mui/material";
import { RTButton } from "@rt/components/Buttons/Index";
import { RTForm } from "@rt/components/Form/Index";
import { RTInput } from "@rt/components/Inputs/Index";
import { useGlobalSnackbar } from "@rt/context_tp/GlobalSnackbarProvider/GlobalSnackbarProvider";

import {
  useForgotPassword,
  useResetPassword,
} from "@rt/hooks/authFunctions/useAuthMutations";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [deliveryMedium, setDeliveryMedium] = useState("");

  const forgotPasswordMutation = useForgotPassword();
  const resetPasswordMutation = useResetPassword();
  const { showSnackbar } = useGlobalSnackbar();

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    forgotPasswordMutation.mutate(
      { email },
      {
        onSuccess: (data) => {
          showSnackbar("Code sent successfully", "success");
          if (
            data.nextStep.resetPasswordStep ===
            "CONFIRM_RESET_PASSWORD_WITH_CODE"
          ) {
            setDeliveryMedium(
              data.nextStep.codeDeliveryDetails?.deliveryMedium || ""
            );
            setActiveStep(1);
          }
        },
        onError: (error) => {
          showSnackbar(error.message, "error");
        },
      }
    );
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    resetPasswordMutation.mutate(
      { email, code: verificationCode, newPassword },
      {
        onSuccess: () => {
          navigate(getRoutePath(ROUTES_ID.login));
          showSnackbar("Password reset successfully", "success");
        },
        onError: (error) => {
          showSnackbar(error.message, "error");
        },
      }
    );
  };

  return (
    <RTForm.container>
      <RTForm.card>
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          Forgot Password
        </Typography>

        <Stepper activeStep={activeStep} sx={{ marginBottom: 3 }}>
          <Step>
            <StepLabel>Enter Email</StepLabel>
          </Step>
          <Step>
            <StepLabel>Reset Password</StepLabel>
          </Step>
        </Stepper>

        {activeStep === 0 && (
          <form onSubmit={handleForgotPassword}>
            <RTInput.text
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <RTButton.login
              fullWidth
              variant="contained"
              type="submit"
              disabled={forgotPasswordMutation.isPending}
              loading={forgotPasswordMutation.isPending}
            >
              Send Code
            </RTButton.login>
          </form>
        )}

        {activeStep === 1 && (
          <form onSubmit={handleResetPassword}>
            <Typography variant="body2" color="textSecondary">
              {`A confirmation code was sent via ${deliveryMedium}.`}
            </Typography>
            <RTInput.text
              fullWidth
              label="Verification Code"
              variant="outlined"
              type="number"
              inputMode="numeric"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
              autoComplete="off"
            />
            <RTInput.text
              fullWidth
              label="New Password"
              type="password"
              variant="outlined"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              autoComplete="off"
            />
            <RTButton.login
              fullWidth
              variant="contained"
              type="submit"
              disabled={resetPasswordMutation.isPending}
              loading={resetPasswordMutation.isPending}
            >
              Reset Password
            </RTButton.login>
          </form>
        )}

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          height={20}
        >
          <Typography>Remembered your password?</Typography>
          <RTButton.action
            underline="none"
            onClick={() => navigate(getRoutePath(ROUTES_ID.login))}
          >
            Login
          </RTButton.action>
        </Stack>
      </RTForm.card>
    </RTForm.container>
  );
};

export default ForgotPasswordPage;

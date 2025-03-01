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
  useRegister,
  useVerifyCode,
} from "@rt/hooks/authFunctions/useAuthMutations";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const { showSnackbar } = useGlobalSnackbar();

  const signUpMutation = useRegister();
  const verifyMutation = useVerifyCode();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    signUpMutation.mutate(
      { email, password },
      {
        onSuccess: () => {
          setActiveStep(1);
          showSnackbar("Verification code sent to your email", "success");
        },
        onError: (error) => {
          showSnackbar(error.message, "error");
        },
      }
    );
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    verifyMutation.mutate(
      { email, code: verificationCode },
      {
        onSuccess: () => {
          navigate(getRoutePath(ROUTES_ID.login));
          showSnackbar("Account verified successfully", "success");
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
          Register
        </Typography>

        <Stepper activeStep={activeStep} sx={{ marginBottom: 3 }}>
          <Step>
            <StepLabel>Sign Up</StepLabel>
          </Step>
          <Step>
            <StepLabel>Verify Code</StepLabel>
          </Step>
        </Stepper>

        {activeStep === 0 && (
          <form onSubmit={handleSignUp}>
            <RTInput.text
              style={{ margin: "10px 0" }}
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <RTInput.text
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <RTButton.login
              fullWidth
              variant="contained"
              type="submit"
              disabled={signUpMutation.isPending}
            >
              {signUpMutation.isPending ? "Registering..." : "Register"}
            </RTButton.login>
          </form>
        )}

        {activeStep === 1 && (
          <form onSubmit={handleVerifyCode}>
            <RTInput.text
              style={{ margin: "10px 0" }}
              fullWidth
              label="Verification Code"
              variant="outlined"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
              type="number"
              inputMode="numeric"
            />
            <RTButton.login
              fullWidth
              variant="contained"
              type="submit"
              disabled={verifyMutation.isPending}
            >
              {verifyMutation.isPending ? "Verifying..." : "Verify Code"}
            </RTButton.login>
          </form>
        )}

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          height={20}
        >
          <Typography>Already have an account?</Typography>
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

export default RegisterPage;

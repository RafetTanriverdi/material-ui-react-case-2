import { useState } from "react";
import { Typography, Stack } from "@mui/material";
import { RTButton } from "@rt/components/Buttons/Index";
import { useNavigate } from "react-router-dom";
import { getRoutePath } from "@rt/routes/routes";
import { ROUTES_ID } from "@rt/routes/routes-id";
import { RTForm } from "@rt/components/Form/Index";
import { RTInput } from "@rt/components/Inputs/Index";
import { useLogin } from "@rt/hooks/authFunctions/useAuthMutations";
import { useGlobalSnackbar } from "@rt/context/GlobalSnackbarProvider/GlobalSnackbarProvider";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { showSnackbar } = useGlobalSnackbar();

  const login = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    login.mutate(
      { email, password },
      {
        onSuccess: () => {
          navigate(getRoutePath(ROUTES_ID.dashboard));
          showSnackbar("Login successful", "success");
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
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <RTInput.text
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
            disabled={login.isPending}
            loading={login.isPending}
          >
            Login
          </RTButton.login>
        </form>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          height={10}
        >
          <Typography>Don't have an account?</Typography>
          <RTButton.action
            underline="none"
            onClick={() => navigate(getRoutePath(ROUTES_ID.register))}
          >
            Register
          </RTButton.action>
        </Stack>
        <RTButton.action
          underline="none"
          onClick={() => navigate(getRoutePath(ROUTES_ID.forgotpassword))}
        >
          Forgot Password
        </RTButton.action>
      </RTForm.card>
    </RTForm.container>
  );
};

export default LoginForm;

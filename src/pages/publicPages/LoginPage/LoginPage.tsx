import { useState } from "react";
import {
  TextField,
  Typography,
  Box,
  CircularProgress,
  styled,
  Container,
} from "@mui/material";
import { RTButton } from "@rt/components/Buttons/Index";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getRoutePath } from "@rt/routes/routes";
import { ROUTES_ID } from "@rt/routes/routes-id";
import { signIn } from "aws-amplify/auth";

// Styled container for the form
const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
  padding: "32px",
  borderRadius: "8px",
  boxShadow:
    theme.palette.mode === "light"
      ? "0px 4px 12px rgba(0,0,0,0.1)"
      : "0px 4px 12px rgba(255,255,255,0.1)",
  backgroundColor: theme.palette.background.paper,
  transition: "all 0.3s ease-in-out",
  width: "100%",
  maxWidth: "400px",
  height: "60%",
}));

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: async () => {
      const response = await signIn({ username: email, password: password });
      console.log(response);
      return response;
    },
    onSuccess: () => {
      navigate(getRoutePath(ROUTES_ID.dashboard));
    },
    onError: (error) => {
      console.log(error);
      setError(error.message);
    },
  });
  return (
    <Container
      maxWidth="xl"
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormContainer>
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          Login
        </Typography>

        {error && (
          <Typography color="error" textAlign="center">
            {error}
          </Typography>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutation.mutate();
          }}
        >
          <TextField
            style={{ margin: " 10px 0" }}
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
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
            disabled={mutation.isPending}
            loading={mutation.isPending}
          >
            {mutation.isPending ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Login"
            )}
          </RTButton.login>
        </form>
      </FormContainer>
    </Container>
  );
};

export default LoginPage;

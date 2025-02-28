import {
  Box,
  Container,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { RTButton } from "@rt/components/Buttons/Index";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { signUp } from "aws-amplify/auth";



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

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");

  //   // Simulate login request
  //   setTimeout(() => {
  //     setLoading(false);
  //     if (email === "test@example.com" && password === "password") {
  //       alert("Login successful!");
  //     } else {
  //       setError("Invalid email or password");
  //     }
  //   }, 1500);
  // };

  const mutation = useMutation({
    mutationKey: ["register"],
    mutationFn: async () => {
      const response = await signUp({ username: email, password: password });
       console.log(response);
      return response;
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
          Register
        </Typography>

      
        <form onSubmit={()=>mutation.mutate()}>
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
     
          >
           Register
          </RTButton.login>
        </form>
      </FormContainer>
    </Container>
  );
};

export default RegisterPage;

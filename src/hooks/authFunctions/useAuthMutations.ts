import { useMutation } from "@tanstack/react-query";
import {
  signIn,
  signUp,
  confirmSignUp,
  signOut,
  ResetPasswordOutput,
  resetPassword,
  confirmResetPassword,
} from "aws-amplify/auth";

export const useRegister = () => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      return await signUp({ username: email, password });
    },
  });
};

export const useVerifyCode = () => {
  return useMutation({
    mutationKey: ["verify"],
    mutationFn: async ({ email, code }: { email: string; code: string }) => {
      return await confirmSignUp({ username: email, confirmationCode: code });
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      return await signIn({ username: email, password });
    },
  });
};

export const useSignOut = () => {
  return useMutation({
    mutationKey: ["signOut"],
    mutationFn: async () => {
      return await signOut();
    },
  });
};
export const useForgotPassword = () => {
  return useMutation({
    mutationKey: ["forgotPassword"],
    mutationFn: async ({ email }: { email: string }) => {
      const response: ResetPasswordOutput = await resetPassword({
        username: email,
      });
      return response;
    },
  });
};

export const useResetPassword = () => {
  return useMutation({
    mutationKey: ["resetPassword"],
    mutationFn: async ({
      email,
      code,
      newPassword,
    }: {
      email: string;
      code: string;
      newPassword: string;
    }) => {
      return await confirmResetPassword({
        username: email,
        confirmationCode: code,
        newPassword,
      });
    },
  });
};

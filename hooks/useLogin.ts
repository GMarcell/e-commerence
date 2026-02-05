"use client";

import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/auth.service";
import { LoginPayload, LoginResponse } from "@/types/auth";

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: login,
  });
};

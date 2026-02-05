import { LoginPayload, LoginResponse } from "@/types/auth";
import axiosInstance from "./axios";

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const { data } = await axiosInstance.post<LoginResponse>("/auth/login", {
    // use this credential cause ogin is handled from dummyjson.com
    username: "emilys",
    password: "emilyspass",

    // username: payload.email,
    // password: payload.password
  });

  return data;
};

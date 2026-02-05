"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import { Card, CardTitle, CardContent } from "../ui/card";
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "../ui/field";
import { Input } from "../ui/input";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import { useLogin } from "@/hooks/useLogin";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { loginFormSchema } from "@/schema/login";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
  const router = useRouter();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const { mutate, isPending, error } = useLogin();

  const { control, handleSubmit } = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    mutate(values, {
      onSuccess: (data) => {
        // store token
        localStorage.setItem("token", data.accessToken);

        // redirect if needed
        router.push("/");
      },
    });
  };
  return (
    <Card className="w-full md:max-w-96">
      <CardTitle className="text-center text-3xl">Login</CardTitle>
      <CardContent>
        <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="form-email">Email</FieldLabel>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    id="form-email"
                    type="email"
                    placeholder="john@example.com"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="form-password">Password</FieldLabel>
                  <ButtonGroup>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      id="input-button-group"
                      placeholder="Password"
                      type={isShowPassword ? "text" : "password"}
                    />
                    <Button
                      variant="outline"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsShowPassword(!isShowPassword);
                      }}
                    >
                      {isShowPassword ? <Eye /> : <EyeClosed />}
                    </Button>
                  </ButtonGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                  <FieldDescription>
                    Not Have Account,{" "}
                    <Link href={"/sign-up"}>Sign Up Here</Link>
                  </FieldDescription>
                </Field>
              )}
            />

            <Field orientation="horizontal" className="justify-end">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}

"use client";

import { formatPostalCode, formatPhoneNumber } from "@/utils/format";
import { useState } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { FieldGroup, Field, FieldLabel, FieldError } from "../ui/field";
import { Input } from "../ui/input";
import { Eye, EyeClosed } from "lucide-react";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { signUpFormSchema } from "@/schema/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const router = useRouter();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const { control, handleSubmit } = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      fullName: "",
      address: "",
      city: "",
      postalCode: "",
      phone: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof signUpFormSchema>) => {
    const { password, ...restData } = data;
    localStorage.setItem("profile", JSON.stringify(restData));
    router.push("/login");
  };

  return (
    <Card className="rounded-md w-full md:max-w-96">
      <CardTitle className="text-center text-3xl">Sign In</CardTitle>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="fullName"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Full Name</FieldLabel>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    id="input-fullname"
                    type="text"
                    placeholder="Full Name"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="address"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Address</FieldLabel>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    id="input-address"
                    type="text"
                    placeholder="Address"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="city"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>City</FieldLabel>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    id="input-city"
                    type="text"
                    placeholder="City"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="postalCode"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Postal Code</FieldLabel>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    id="input-postal-code"
                    type="text"
                    placeholder="Postal Code"
                    value={field.value}
                    onChange={(e) =>
                      field.onChange(formatPostalCode(e.target.value))
                    }
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Phone</FieldLabel>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    id="input-phone"
                    type="tel"
                    placeholder="phone"
                    value={field.value}
                    onChange={(e) =>
                      field.onChange(formatPhoneNumber(e.target.value))
                    }
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
                <Field data-invalid={fieldState.invalid}>
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

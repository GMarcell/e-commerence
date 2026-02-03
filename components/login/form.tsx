"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import { Card, CardTitle, CardContent } from "../ui/card";
import { FieldGroup, Field, FieldLabel, FieldDescription } from "../ui/field";
import { Input } from "../ui/input";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";

export default function LoginForm() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <Card className="w-full md:max-w-96">
      <CardTitle className="text-center text-3xl">Login</CardTitle>
      <CardContent>
        <form className="w-full max-w-sm">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="form-email">Email</FieldLabel>
              <Input
                id="form-email"
                type="email"
                placeholder="john@example.com"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="form-password">Password</FieldLabel>
              <ButtonGroup>
                <Input
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
              <FieldDescription>
                Not Have Account, <Link href={"/sign-up"}>Sign Up Here</Link>
              </FieldDescription>
            </Field>

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

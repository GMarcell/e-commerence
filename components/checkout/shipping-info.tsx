'use client'

import { useState } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { FieldGroup, Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { formatPhoneNumber, formatPostalCode } from "@/utils/format";

export default function CheckoutShippingInfo() {
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <Card className="rounded-md">
      <CardTitle className="p-4">Shipping Info</CardTitle>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel>Full Name</FieldLabel>
            <Input id="input-fullname" type="text" placeholder="Full Name" />
          </Field>
          <Field>
            <FieldLabel>Adress</FieldLabel>
            <Input id="input-adress" type="text" placeholder="Adress" />
          </Field>
          <Field>
            <FieldLabel>City</FieldLabel>
            <Input id="input-city" type="text" placeholder="City" />
          </Field>
          <Field>
            <FieldLabel>Postal Code</FieldLabel>
            <Input
              id="input-postal-code"
              type="text"
              placeholder="Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(formatPostalCode(e.target.value))}
            />
          </Field>
          <Field>
            <FieldLabel>Phone</FieldLabel>
            <Input
              id="input-phone"
              type="tel"
              placeholder="phone"
              value={phone}
              onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
            />
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  );
}

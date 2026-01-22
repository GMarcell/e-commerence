"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { formatCardNumber, formatCVV, formatExpiryDate } from "@/utils/format";

export default function CheckoutPaymentForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [ccv, setCcv] = useState("");

  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Cardholder */}
        <div className="space-y-1">
          <Label htmlFor="name">Cardholder Name</Label>
          <Input id="name" placeholder="John Doe" />
        </div>

        {/* Card Number */}
        <div className="space-y-1">
          <Label htmlFor="card">Card Number</Label>
          <Input
            id="card"
            placeholder="1234 5678 9012 3456"
            inputMode="numeric"
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
          />
        </div>

        {/* Expiry + CVV */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label htmlFor="expiry">Expiry Date</Label>
            <Input
              id="expiry"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(formatExpiryDate(e.target.value))}
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="cvv">CVV</Label>
            <Input
              id="cvv"
              placeholder="123"
              inputMode="numeric"
              value={ccv}
              onChange={(e) => setCcv(formatCVV(e.target.value))}
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1">
          <Label htmlFor="email">Billing Email</Label>
          <Input id="email" type="email" placeholder="you@email.com" />
        </div>
      </CardContent>
    </Card>
  );
}

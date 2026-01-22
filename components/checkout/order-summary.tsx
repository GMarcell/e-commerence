"use client";
import { useCartStore } from "@/store/cart.store";
import { Card, CardContent, CardTitle } from "../ui/card";

export default function CheckoutOrderSummary() {
  const { totalItems, totalPrice } = useCartStore();

  const totalPriceTax = totalPrice() + totalPrice() * 0.11;

  return (
    <Card>
      <CardTitle className="px-4">Order Summary</CardTitle>
      <CardContent>
        <h1>Items: {totalItems()}</h1>
        <h1>Total: {totalPriceTax.toFixed(2)}</h1>
      </CardContent>
    </Card>
  );
}

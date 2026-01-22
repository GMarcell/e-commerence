"use client";
import { useCartStore } from "@/store/cart.store";
import { Card, CardContent, CardTitle } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CartSummary() {
  const { totalItems, totalPrice } = useCartStore();
  const tax = totalPrice() * 0.11;
  return (
    <Card>
      <CardTitle className="p-4">
        <h1>Cart Summary</h1>
      </CardTitle>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <h1>Total Quantity </h1>
          <h1 className="text-right">{totalItems()} Pcs</h1>
          <h1>SubTotal </h1>
          <h1 className="text-right">{totalPrice().toFixed(2)}</h1>
          <h1>Tax (11%) </h1>
          <h1 className="text-right">{tax.toFixed(2)}</h1>
          <h1>Total </h1>
          <h1 className="text-right">{(totalPrice() + tax).toFixed(2)}</h1>
          <div className="col-span-2">
            <Link href="/checkout">
              <Button className="w-full">Checkout</Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

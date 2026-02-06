"use client";

import { useCartStore } from "@/store/cart.store";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { MinusCircle, PlusCircle, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartListProduct() {
  const router = useRouter();
  const { increaseQty, decreaseQty, removeFromCart, items } = useCartStore();

  return (
    <div>
      {items.length === 0 ? (
        <Card className="mb-4 items-center">
          <h1 className="text-center text-2xl font-black">
            Your cart is empty
          </h1>
          <h1>click the cart icon to back to products page</h1>
          <ShoppingCart
            className="mx-auto mt-4"
            size={48}
            onClick={() => router.push("/")}
          />
        </Card>
      ) : (
        <>
          <h1 className="text-2xl font-black">List Item</h1>
          {items?.map((item) => (
            <div className="w-full flex gap-4 py-2" key={item.id}>
              <div className="w-4/12">
                <Card>
                  <CardContent className="relative aspect-square p-0">
                    <Image
                      src={item?.thumbnail ?? ""}
                      alt={item?.title ?? ""}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </CardContent>
                </Card>
              </div>
              <div>
                <h1 className="text-xl">{item.title}</h1>
                <h2 className="text-lg">Price: {item.price}</h2>
                <div className="flex items-center gap-2">
                  Quantity
                  <Button variant="ghost" onClick={() => increaseQty(item.id)}>
                    <PlusCircle />
                  </Button>
                  {item.quantity}
                  <Button variant="ghost" onClick={() => decreaseQty(item.id)}>
                    <MinusCircle />
                  </Button>
                </div>
                <h2>
                  Subtotal:{" "}
                  <span className="font-black">
                    {(item.quantity * item.price).toFixed(2)}
                  </span>
                </h2>
                <Button
                  className="mt-4"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

"use client";

import { useCartStore } from "@/store/cart.store";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { MinusCircle, PlusCircle } from "lucide-react";

export default function CartListProduct() {
  const {
    increaseQty,
    decreaseQty,
    removeFromCart,
    items,
  } = useCartStore();

  return (
    <div>
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
            <h2>Subtotal: {" "}
              <span className="font-black">
              {(item.quantity * item.price).toFixed(2)}
              </span>
              </h2>
            <Button className="mt-4" onClick={() => removeFromCart(item.id)}>Remove</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useCartStore } from "@/store/cart.store";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CheckoutAction() {
  const router = useRouter();
  const { clearCart } = useCartStore();
  const handlePay = () => {
    clearCart();
    toast.success("Purchase Has Been Made", { position: "top-right" });
    router.push("/");
  };
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <Button
        variant="secondary"
        className="w-full"
        onClick={() => router.back()}
      >
        Cancel
      </Button>
      <Button onClick={() => handlePay()}>Pay Now</Button>
    </div>
  );
}

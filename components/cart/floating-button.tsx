"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart.store";
import { usePathname } from "next/navigation";

export default function FloatingCartButton() {
  const hydrated = useCartStore.persist.hasHydrated();
  const totalItems = useCartStore((state) => state.totalItems());
  const pathname = usePathname();
  const isCartPage = pathname.includes("/cart");
  const isCheckoutPage = pathname.includes("/checkout");

  if (!hydrated || totalItems === 0 || isCartPage || isCheckoutPage)
    return null;

  return (
    <Link
      href="/cart"
      aria-label="Go to cart"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition"
    >
      <ShoppingCart size={22} />

      <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1 text-xs font-semibold text-white bg-red-500 rounded-full">
        {totalItems}
      </span>
    </Link>
  );
}

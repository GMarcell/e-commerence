import CartListProduct from "@/components/cart/list-products";
import CartSummary from "@/components/cart/summary";

export default function CartPage() {
  return (
    <div className="p-4">
      <CartListProduct/>
      <CartSummary/>
    </div>
  );
}

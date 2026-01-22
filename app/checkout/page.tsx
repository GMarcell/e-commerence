import CheckoutOrderSummary from "@/components/checkout/order-summary";
import CheckoutPaymentForm from "@/components/checkout/payment";
import CheckoutShippingInfo from "@/components/checkout/shipping-info";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <CheckoutShippingInfo />
      <CheckoutPaymentForm />
      <CheckoutOrderSummary />
      <Button className="w-full">Pay Now</Button>
    </div>
  );
}

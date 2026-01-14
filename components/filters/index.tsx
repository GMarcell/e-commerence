import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import OrderBy from "./order-by";
import PriceFilter from "./price-filter";
import RatingFilter from "./rating-filter";
import SortBy from "./sort-by";

export default function ProductFilters() {
  return (
    <Accordion type="single" collapsible className="w-full p-4">
      <AccordionItem value="item-1">
        <AccordionTrigger>Product Filters</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <PriceFilter />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-2 md:col-span-1">
              <RatingFilter />
            </div>
            <div className="flex justify-center">
              <SortBy />
            </div>
            <div className="flex justify-center">
              <OrderBy />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

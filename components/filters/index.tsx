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
    <Accordion
      type="single"
      collapsible
      className="w-full p-4"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Product Filters</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <PriceFilter />
          <RatingFilter />
          <div className="flex justify-around">
          <SortBy />
          <OrderBy />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

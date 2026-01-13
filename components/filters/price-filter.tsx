"use client";

import { Slider } from "@/components/ui/slider";
import { useProductFilterStore } from "@/store/product-filter";

const MIN_PRICE = 0;
const MAX_PRICE = 10000;

export default function PriceFilter() {
  const { minPrice, maxPrice, setPriceRange } = useProductFilterStore();

  return (
    <div className="w-full max-w-sm space-y-4 p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold">Price Range</h3>
        <span className="text-xs text-muted-foreground">
          ${minPrice} – ${maxPrice}
        </span>
      </div>

      <Slider
        min={MIN_PRICE}
        max={MAX_PRICE}
        step={10}
        value={[minPrice, maxPrice]}
        onValueChange={([min, max]) => setPriceRange(min, max)}
      />

      {/* Optional numeric inputs */}
      <div className="flex gap-2">
        <input
          type="number"
          value={minPrice}
          min={MIN_PRICE}
          max={maxPrice}
          onChange={(e) => setPriceRange(Number(e.target.value), maxPrice)}
          className="input input-bordered w-full"
        />
        <input
          type="number"
          value={maxPrice}
          min={minPrice}
          max={MAX_PRICE}
          onChange={(e) => setPriceRange(minPrice, Number(e.target.value))}
          className="input input-bordered w-full"
        />
      </div>
    </div>
  );
}

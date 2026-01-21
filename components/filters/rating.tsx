"use client";

import { useProductFilterStore } from "@/store/product-filter";
import StarRating from "../star-rating";

export default function RatingFilter() {
  const { minRating, setMinRating } = useProductFilterStore();
  const handleClick = (rating: number) => {
    setMinRating(rating === minRating ? 0 : rating); // toggle off
  };

  return (
    <div className="space-y-2 p-4 flex items-center justify-between md:flex-col">
      <div className="flex items-center m-0">
        <h3 className="text-sm font-semibold">Minimum Rating</h3>
      </div>
      <StarRating rating={minRating} handleClick={handleClick} />
    </div>
  );
}

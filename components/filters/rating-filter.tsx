"use client";

import { useProductFilterStore } from "@/store/product-filter";
import { Star } from "lucide-react";

const MAX_RATING = 5;

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
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleClick(star)}
            className="focus:outline-none"
          >
            <Star
              size={20}
              className={
                star <= minRating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300 fill-gray-300"
              }
            />
          </button>
        ))}
        {minRating > 0 && (
          <button
            className="text-xs text-gray-500 ml-2 hover:underline"
            onClick={() => setMinRating(0)}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

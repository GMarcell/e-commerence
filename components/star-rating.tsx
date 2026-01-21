import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  handleClick: (rating: number) => void;
  isClickable?: boolean;
}

export default function StarRating({
  rating,
  handleClick,
  isClickable = true,
}: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => handleClick(star)}
          className="focus:outline-none"
          disabled={!isClickable}
        >
          <Star
            size={20}
            className={
              star <= rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300 fill-gray-300"
            }
          />
        </button>
      ))}
      {isClickable && rating > 0 && (
        <button
          className="text-xs text-gray-500 ml-2 hover:underline"
          onClick={() => handleClick(0)}
        >
          Clear
        </button>
      )}
    </div>
  );
}

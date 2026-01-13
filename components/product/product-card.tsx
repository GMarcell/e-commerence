import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Product } from "@/types/product";
import { Button } from "../ui/button";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  console.log(product);
  return (
    <Card className="w-full max-w-sm overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* Image */}
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <CardContent className="px-4">
        <CardTitle className="text-lg font-semibold truncate">
          {product.title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 line-clamp-3">
          <div className="flex justify-between py-2">
            <div>
              Rating: {product.rating} ({product.reviews.length} reviews)
            </div>
            <div>Price: ${product.price}</div>
          </div>
          <Button className="w-full">Add To Cart</Button>
        </CardDescription>
      </CardContent>
    </Card>
  );
}

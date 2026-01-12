import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* Image */}
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
        //   className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold truncate">
          {product.title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 line-clamp-3">
          {product.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

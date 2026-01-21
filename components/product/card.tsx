import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Product } from "@/types/product";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  return (
    <Card
      className="w-full max-w-sm overflow-hidden hover:shadow-lg transition-shadow duration-200"
      onClick={() => router.push(`/${product.id}`)}
    >
      {/* Image */}
      <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
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
              <div>Rating: {product.rating}</div>
              <div>({product.reviews.length} reviews)</div>
            </div>
            <div className="flex items-center">Price: ${product.price}</div>
          </div>
          <Button className="w-full">
            <ShoppingCart />
            Add To Cart
          </Button>
        </CardDescription>
      </CardContent>
    </Card>
  );
}

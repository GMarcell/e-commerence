"use client";

import ProductCarousel from "@/components/product/carousel";
import StarRating from "@/components/star-rating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useProduct } from "@/hooks/useProduct";
import { useCartStore } from "@/store/cart.store";
import { ShoppingCart } from "lucide-react";
import { useParams } from "next/navigation";

export default function ProductDetailsPage() {
  const params = useParams<{ id: string }>();
  const { data, isLoading } = useProduct(params.id);
  const { addToCart } = useCartStore();

  if (data === undefined || isLoading) {
    return <div>Loading.....</div>;
  }

  return (
    <div className="w-full flex flex-col relative overflow-hidden py-2 md:flex-row">
      <ProductCarousel images={data?.images ?? []} />
      <div className="p-4 flex flex-col justify-between">
        <div className="flex flex-col gap-2 mb-3">
          <h1 className="text-2xl font-bold">{data?.title}</h1>
          <div className="flex gap-4">
            <StarRating
              rating={Math.floor(data?.rating ?? 0)}
              handleClick={() => {}}
              isClickable={false}
            />
            <p>({data?.reviews.length} reviews)</p>
          </div>
          <p className="text-xl">Price: {data?.price}</p>
          <p className="text-sm">Stock: {data?.stock}</p>
          <p className="mt-4">{data?.description}</p>
          <div className="flex gap-2 flex-row">
            Category:{" "}
            {data?.tags?.map((tag) => (
              <Badge key={tag}>
                <h1 className="text-sm">{tag}</h1>
              </Badge>
            ))}
          </div>
        </div>
        <Button onClick={() => addToCart(data!)}>
          <ShoppingCart />
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

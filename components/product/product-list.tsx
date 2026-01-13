"use client";

import { useProducts } from "@/hooks/useProducts";
import { useProductFilterStore } from "@/store/product-filter";
import ProductCard from "./product-card";
import { Skeleton } from "../ui/skeleton";
import { useEffect } from "react";
import { limitProductPerPage } from "@/services/product.service";

export default function ProductList() {
  const {
    search,
    category,
    page,
    minPrice,
    maxPrice,
    setTotalPages,
    minRating,
  } = useProductFilterStore();
  const { data, isLoading } = useProducts({ search, category, page });

  const filteredProducts = data?.products.filter(
    (p) => p.price >= minPrice && p.price <= maxPrice && p.rating >= minRating
  );

  useEffect(() => {
    setTotalPages(Math.floor((data?.total ?? 1) / limitProductPerPage));
  }, [data, setTotalPages]);

  if (isLoading)
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-2 justify-items-center">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-31.25 w-full max-w-sm rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full max-w-sm" />
            <Skeleton className="h-4 w-full max-w-sm" />
          </div>
        </div>
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 justify-items-center">
      {filteredProducts?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

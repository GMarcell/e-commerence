import { useQuery } from "@tanstack/react-query";
import { getProductById } from "@/services/product.service";
import type { Product } from "@/types/product";

export const useProduct = (id?: number | string) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => {
      if (!id) {
        throw new Error("Product ID is required");
      }
      return getProductById(id);
    },
    enabled: !!id, // ✅ only run when id exists
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

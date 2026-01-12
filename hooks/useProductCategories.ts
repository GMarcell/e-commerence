import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/product.service";
import { ProductCategory } from "@/types/product-category";

export const useProductCategories = () => {
  return useQuery<ProductCategory[]>({
    queryKey: ["product-categories"],
    queryFn: () => getCategories(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

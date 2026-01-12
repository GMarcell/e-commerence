import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  getProducts,
  searchProducts,
  getProductsByCategory,
} from "@/services/product.service";

interface UseProductsParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
}

export const useProducts = ({
  page = 0,
  limit = 20,
  search,
  category,
}: UseProductsParams = {}) => {
  const skip = page * limit;

  return useQuery({
    queryKey: ["products", { page, limit, search, category }],
    queryFn: () => {
      if (search) {
        return searchProducts(search);
      }

      if (category) {
        return getProductsByCategory(category);
      }

      return getProducts({ limit, skip });
    },
    placeholderData: (previousData) => previousData,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

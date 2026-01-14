import axios from "@/services/axios";
import { Product, ProductListResponse } from "@/types/product";
import { ProductCategory } from "@/types/product-category";

export const limitProductPerPage = 20;

/**
 * Get all products (paginated)
 */
export const getProducts = async (params?: {
  limit?: number;
  skip?: number;
  sortBy?: string;
  orderBy?: string;
}) => {
  const {
    limit = limitProductPerPage,
    skip = 0,
    sortBy = "title",
    orderBy = "asc",
  } = params || {};

  const response = await axios.get<ProductListResponse>("/products", {
    params: { limit, skip, sortBy, orderBy },
  });

  return response.data;
};

/**
 * Get single product by ID
 */
export const getProductById = async (id: number | string) => {
  const response = await axios.get<Product>(`/products/${id}`);
  return response.data;
};

/**
 * Search products
 */
export const searchProducts = async (query: string) => {
  if (!query) {
    return {
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
    };
  }

  const response = await axios.get<ProductListResponse>("/products/search", {
    params: { q: query },
  });

  return response.data;
};

/**
 * Get products by category
 */
export const getProductsByCategory = async (category: string) => {
  const response = await axios.get<ProductListResponse>(
    `/products/category/${category}`
  );

  return response.data;
};

/**
 * Get all categories
 */
export const getCategories = async () => {
  const response = await axios.get<ProductCategory[]>("/products/categories");
  return response.data;
};

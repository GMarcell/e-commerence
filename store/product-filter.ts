import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProductFilterState {
  search: string;
  category: string | null;
  page: number;
  minPrice: number;
  maxPrice: number;
  totalPages: number;
  minRating: number;

  // actions
  setSearch: (value: string) => void;
  setCategory: (value: string | null) => void;
  setPage: (value: number) => void;
  setPriceRange: (min: number, max: number) => void;
  setTotalPages: (total: number) => void;
  setMinRating: (rating: number) => void; // NEW
  resetFilters: () => void;
}

export const useProductFilterStore = create<ProductFilterState>()(
  persist(
    (set) => ({
      search: "",
      category: null,
      page: 0,
      minPrice: 0,
      maxPrice: 10000,
      totalPages: 0,
      minRating: 3,

      setSearch: (value) => set({ search: value, page: 0 }), // reset page
      setCategory: (value) => set({ category: value, page: 0 }),
      setPage: (value) => set({ page: value }),
      setPriceRange: (min, max) =>
        set({ minPrice: min, maxPrice: max, page: 0 }),
      setTotalPages: (total) => set({ totalPages: total }),
      setMinRating: (rating) => set({ minRating: rating }),
      resetFilters: () =>
        set({
          search: "",
          category: null,
          page: 0,
          minPrice: 0,
          maxPrice: 10000,
          totalPages: 0,
        }),
    }),
    {
      name: "product-filter", // key in localStorage
    }
  )
);

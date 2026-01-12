import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProductFilterState {
  search: string;
  category: string | null;
  page: number;

  // actions
  setSearch: (value: string) => void;
  setCategory: (value: string | null) => void;
  setPage: (value: number) => void;
  resetFilters: () => void;
}

export const useProductFilterStore = create<ProductFilterState>()(
  persist(
    (set) => ({
      search: "",
      category: null,
      page: 0,

      setSearch: (value) => set({ search: value, page: 0 }), // reset page
      setCategory: (value) => set({ category: value, page: 0 }),
      setPage: (value) => set({ page: value }),
      resetFilters: () =>
        set({ search: "", category: null, page: 0 }),
    }),
    {
      name: "product-filter", // key in localStorage
    }
  )
);

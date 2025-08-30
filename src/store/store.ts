import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { Product } from "@/lib/types";

interface State {
  // Product state
  products: Product[];
  setProducts: (products: Product[]) => void;

  searchQuery: string;
  setSearchQuery: (query: string) => void;

  categories: string[];
  activeCategorie: string;
  setCategories: (categories: string[]) => void;
  setActiveCategorie: (categorie: string) => void;

  page: number;
  setPage: (page: number) => void;

  productsByPage: number;
  setProductsByPage: (number: number) => void;
}

export const UseStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        // Product state
        products: [],
        setProducts: (products: Product[]) => {
          set({ products });
        },

        searchQuery: "",
        setSearchQuery: (query: string) => {
          set({ searchQuery: query });
        },

        categories: [],
        activeCategorie: "",
        setCategories: (categories: string[]) => {
          set({ categories });
        },
        setActiveCategorie: (categorie: string) => {
          set({ activeCategorie: categorie });
        },

        page: 1,
        setPage: (page: number) => {
          set({ page });
        },

        productsByPage: 10,
        setProductsByPage: (number: number) => {
          set({ productsByPage: number });
        },
      }),
      {
        name: "test-Store",
      }
    )
  )
);

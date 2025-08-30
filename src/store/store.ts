import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { Product } from "@/lib/types";

// Interfaz que define el estado global de la aplicación
interface State {
  // Lista de productos
  products: Product[];
  // Función para actualizar la lista de productos
  setProducts: (products: Product[]) => void;

  // Texto de búsqueda actual
  searchQuery: string;
  // Función para actualizar el texto de búsqueda
  setSearchQuery: (query: string) => void;

  // Lista de categorías disponibles
  categories: string[];
  // Categoría activa seleccionada
  activeCategorie: string;
  // Función para actualizar la lista de categorías
  setCategories: (categories: string[]) => void;
  // Función para actualizar la categoría activa
  setActiveCategorie: (categorie: string) => void;

  // Página actual para paginación
  page: number;
  // Función para actualizar la página actual
  setPage: (page: number) => void;

  // Cantidad de productos por página
  productsByPage: number;
  // Función para actualizar la cantidad de productos por página
  setProductsByPage: (number: number) => void;
}

// Hook global de Zustand para manejar el estado de la tienda
export const UseStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        // Estado y acciones para productos
        products: [],
        setProducts: (products: Product[]) => {
          set({ products });
        },

        // Estado y acciones para búsqueda
        searchQuery: "",
        setSearchQuery: (query: string) => {
          set({ searchQuery: query });
        },

        // Estado y acciones para categorías
        categories: [],
        activeCategorie: "",
        setCategories: (categories: string[]) => {
          set({ categories });
        },
        setActiveCategorie: (categorie: string) => {
          set({ activeCategorie: categorie });
        },

        // Estado y acciones para paginación
        page: 1,
        setPage: (page: number) => {
          set({ page });
        },

        // Estado y acciones para productos por página
        productsByPage: 10,
        setProductsByPage: (number: number) => {
          set({ productsByPage: number });
        },
      }),
      {
        // Nombre del almacenamiento persistente en localStorage
        name: "test-Store",
      }
    )
  )
);

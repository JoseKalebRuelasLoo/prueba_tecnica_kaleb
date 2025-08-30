import { UseStore } from "@/store/store";
import { useEffect } from "react";
import { Product } from "@/lib/types";

// Hook personalizado para manejar productos y categorías
export default function useProductsHook() {
  // Acciones del store global para actualizar productos, categorías, búsqueda y categoría activa
  const setProducts = UseStore((state) => state.setProducts);
  const setCategories = UseStore((state) => state.setCategories);
  const setSearchQuery = UseStore((state) => state.setSearchQuery);
  const setActiveCategorie = UseStore((state) => state.setActiveCategorie);

  // Obtiene todos los productos desde la API y los guarda en el store
  const fetchProducts = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    setProducts(data.data);
  };

  // Obtiene un producto por su ID desde la API
  const getProductById = async (id: number) => {
    const response = await fetch(`/api/products/${id}`);
    const data = await response.json();
    return data.data as Product;
  };

  // Obtiene todas las categorías desde la API y las guarda en el store
  const getCategories = async () => {
    const response = await fetch("/api/categories");
    const data = await response.json();
    setCategories(data.data);
  };

  // Busca productos por texto, limpia la categoría activa y actualiza los productos en el store
  const searchProducts = async (query: string) => {
    setSearchQuery(query);
    setActiveCategorie("");
    const response = await fetch(`/api/products/search?q=${query}`);
    const data = await response.json();
    setProducts(data.data);
  };

  // Busca productos por categoría, limpia la búsqueda y actualiza los productos en el store
  const searchByCategory = async (category: string) => {
    if (category === "") {
      fetchProducts();
      return;
    }
    setActiveCategorie(category);
    setSearchQuery("");
    const response = await fetch(`/api/products/categories/${category}`);
    const data = await response.json();
    setProducts(data.data);
  };

  // Efecto que se ejecuta al montar el componente para cargar productos y categorías
  useEffect(() => {
    fetchProducts();
    getCategories();
  }, []);

  // Devuelve las funciones útiles para usar en componentes
  return {
    getProductById,
    getCategories,
    searchProducts,
    searchByCategory,
  };
}

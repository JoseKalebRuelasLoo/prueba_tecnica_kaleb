import { UseStore } from "@/store/store";
import { useEffect, useState } from "react";
import { Product } from "@/lib/types";

// Función auxiliar para hacer fetch y actualizar productos y paginación
const fetchProductsAndPagination = async (
  url: string,
  setProducts: (products: Product[]) => void,
  setTotalPages: (total: number) => void,
  setError: (error: string | null) => void
) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok || data.status === "error") {
      throw new Error(data.message || "Error obteniendo productos");
    }
    setProducts(data.data);
    setTotalPages(data.pagination.total);
    setError(null);
  } catch (error) {
    setError("Error obteniendo productos: " + error);
    setProducts([]);
    setTotalPages(0);
  }
};

export default function useProductsHook() {
  //Variable para el manejo de errores
  const [error, setError] = useState<string | null>(null);

  //Funciones y estados de la store
  const {
    setProducts,
    setCategories,
    setSearchQuery,
    setActiveCategorie,
    setTotalPages,
    page,
    productsByPage,
    activeCategorie,
    searchQuery,
    setProductsByPage,
    setPage,
  } = UseStore();

  // Fetch productos según filtros actuales
  const fetchProducts = async (
    customPage = page,
    customLimit = productsByPage,
    category = activeCategorie,
    query = searchQuery
  ) => {
    let url = `/api/products?page=${customPage}&limit=${customLimit}`;
    if (query) {
      url = `/api/products/search?q=${query}&page=${customPage}&limit=${customLimit}`;
    } else if (category) {
      url = `/api/products/categories/${category}?page=${customPage}&limit=${customLimit}`;
    }
    await fetchProductsAndPagination(url, setProducts, setTotalPages, setError);
  };

  // Obtener producto por ID
  const getProductById = async (id: number) => {
    const response = await fetch(`/api/products/${id}`);
    const data = await response.json();
    return data.data as Product;
  };

  // Obtener categorías
  const getCategories = async () => {
    const response = await fetch("/api/categories");
    const data = await response.json();
    setCategories(data.data);
  };

  // Buscar productos por nombre
  const searchProducts = async (
    query: string,
    customPage = 1,
    customLimit = productsByPage
  ) => {
    setSearchQuery(query);
    setActiveCategorie("");
    await fetchProducts(customPage, customLimit, "", query);
  };

  // Buscar productos por categoría
  const searchByCategory = async (
    category: string,
    customPage = 1,
    customLimit = productsByPage
  ) => {
    setActiveCategorie(category);
    setSearchQuery("");
    await fetchProducts(customPage, customLimit, category, "");
  };

  // Cambiar página
  const changePage = (newPage: number) => {
    setPage(newPage);
    fetchProducts(newPage);
  };

  // Cambiar la cantidad de productos por página
  const changeProductsByPage = (newLimit: number) => {
    setProductsByPage(newLimit);
    setPage(1);
    fetchProducts(1, newLimit);
  };

  useEffect(() => {
    fetchProducts();
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    getProductById,
    getCategories,
    searchProducts,
    searchByCategory,
    changePage,
    changeProductsByPage,
    error,
  };
}

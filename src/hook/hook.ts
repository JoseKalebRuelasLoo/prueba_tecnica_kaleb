import { UseStore } from "@/store/store";
import { useEffect } from "react";
import { Product } from "@/lib/types";

export default function useProductsHook() {
  const setProducts = UseStore((state) => state.setProducts);
  const setCategories = UseStore((state) => state.setCategories);
  const setSearchQuery = UseStore((state) => state.setSearchQuery);
  const setActiveCategorie = UseStore((state) => state.setActiveCategorie);

  const fetchProducts = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    setProducts(data.data);
  };

  const getProductById = async (id: number) => {
    const response = await fetch(`/api/products/${id}`);
    const data = await response.json();
    return data.data as Product;
  };

  const getCategories = async () => {
    const response = await fetch("/api/categories");
    const data = await response.json();
    setCategories(data.data);
  };

  const searchProducts = async (query: string) => {
    setSearchQuery(query);
    setActiveCategorie("");
    const response = await fetch(`/api/products/search?q=${query}`);
    const data = await response.json();
    setProducts(data.data);
  };

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

  useEffect(() => {
    fetchProducts();
    getCategories();
  }, []);

  return {
    getProductById,
    getCategories,
    searchProducts,
    searchByCategory,
  };
}

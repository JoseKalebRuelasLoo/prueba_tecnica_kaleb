"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import useProductsHook from "@/hook/hook";
import { UseStore } from "@/store/store";
import { House } from "lucide-react";

// Barra de navegación principal
export default function Navbar() {
  const [query, setQuery] = useState("");
  const { theme, setTheme } = useTheme();
  const { searchProducts, searchByCategory } = useProductsHook();
  const { categories, activeCategorie } = UseStore();

  // Maneja la búsqueda por texto
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchProducts(query);
  };

  const isDark = theme === "dark";

  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-900 shadow mb-6">
      {/* Logo/Home */}
      <Link
        href="/"
        className="text-xl font-bold text-gray-800 dark:text-white hover:underline focus:outline-none"
      >
        <House className="inline-block" size={40} />
      </Link>
      {/* Buscador y selector de categoría */}
      <form onSubmit={handleSearch} className="flex-1 max-w-2xl flex">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-4/6 px-3 py-2 rounded-l border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
        />
        <select
          value={activeCategorie}
          onChange={(e) => searchByCategory(e.target.value)}
          className="w-2/6 px-3 py-2 rounded-r border-t border-b border-r border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
        >
          <option value="">Todas las categorías</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </form>
      {/* Switch de tema claro/oscuro */}
      <label className="ml-4 flex items-center cursor-pointer select-none">
        <span className="mr-2 text-gray-700 dark:text-gray-200 text-sm"></span>
        <div className="relative">
          <input
            type="checkbox"
            checked={isDark}
            onChange={() => setTheme(isDark ? "light" : "dark")}
            className="sr-only"
            aria-label="Cambiar tema"
          />
          <div className="block w-10 h-6 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          <div
            className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform ${
              isDark
                ? "translate-x-0 bg-blue-100"
                : "translate-x-4 bg-yellow-400"
            }`}
          ></div>
        </div>
      </label>
    </nav>
  );
}

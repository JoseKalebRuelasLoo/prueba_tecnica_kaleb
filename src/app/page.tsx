"use client";

import { UseStore } from "@/store/store";
import ProductCard from "@/components/productCard";
import Link from "next/link";
import useProductsHook from "@/hook/hook";

export default function ProductGrid() {
  const products = UseStore((state) => state.products);
  const currentPage = UseStore((state) => state.page);
  const totalPages = UseStore((state) => state.totalPages);
  const productsByPage = UseStore((state) => state.productsByPage);

  const { changePage, changeProductsByPage } = useProductsHook();

  return (
    <main className="p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Productos</h1>
        <div>
          <label htmlFor="productsPerPage" className="mr-2 font-medium">
            Productos por página:
          </label>
          <select
            id="productsPerPage"
            className="border rounded px-2 py-1"
            value={productsByPage}
            onChange={(e) => {
              changeProductsByPage(Number(e.target.value));
            }}
          >
            {[5, 10, 15, 20].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="px-4 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span className="px-4 py-2 mx-1">Página {currentPage}</span>
        <button
          className="px-4 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </main>
  );
}

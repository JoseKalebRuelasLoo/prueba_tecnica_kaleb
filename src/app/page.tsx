"use client";

import { UseStore } from "@/store/store";
import { useState, useEffect } from "react";
import Link from "next/link";
import useProductsHook from "@/hook/hook";
import ProductCard from "@/components/productCard";
import Pagination from "@/components/pagination";
import ProductsPerPageSelector from "@/components/productsPerPageSelector";
import ModalError from "@/components/modalError";

export default function ProductGrid() {
  const { error } = useProductsHook();
  const [showError, setShowError] = useState(true);

  // Obtener productos de la tienda
  const products = UseStore((state) => state.products);
  const currentPage = UseStore((state) => state.page);
  const totalPages = UseStore((state) => state.totalPages);
  const productsByPage = UseStore((state) => state.productsByPage);

  // Funciones para cambiar de página y productos por página del hook
  const { changePage, changeProductsByPage } = useProductsHook();

  // Manejar el cierre del modal
  useEffect(() => {
    if (error) setShowError(true);
  }, [error]);

  return (
    <main className="p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Productos</h1>
        <ProductsPerPageSelector
          value={productsByPage}
          onChange={changeProductsByPage}
        />
      </div>
      <div className="grid grid-cols-1 mx-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={changePage}
      />
      <ModalError
        error={showError ? error : null}
        onClose={() => setShowError(false)}
      />
    </main>
  );
}

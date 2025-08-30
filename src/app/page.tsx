"use client";

import { UseStore } from "@/store/store";
import ProductCard from "@/components/productCard";
import Link from "next/link";
import useProductsHook from "@/hook/hook";
import Pagination from "@/components/pagination";
import ProductsPerPageSelector from "@/components/productsPerPageSelector";

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
    </main>
  );
}

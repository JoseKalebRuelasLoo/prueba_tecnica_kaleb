"use client";

import { UseStore } from "@/store/store";
import ProductCard from "@/components/productCard";
import Link from "next/link";

export default function ProductGrid() {
  const products = UseStore((state) => state.products);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-6">Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </main>
  );
}

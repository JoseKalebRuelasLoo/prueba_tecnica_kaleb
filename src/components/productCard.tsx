"use client";

import type { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      <div className="relative">
        <img
          src={product.imagen_principal}
          alt={product.nombre}
          loading="lazy"
          className="w-full h-40 object-contain rounded bg-white"
        />
        {product.oferta && (
          <span className="absolute top-1 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Oferta {product.descuento > 0 && `-${product.descuento}%`}
          </span>
        )}
      </div>
      <div className="flex-1 flex flex-col mt-3">
        <h2 className="text-lg font-semibold text-black">{product.nombre}</h2>
        <p className="text-gray-500 text-sm">{product.categoria}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xl font-bold text-green-600">
            ${product.precio.toFixed(2)}
          </span>
          {product.oferta && product.descuento > 0 && (
            <span className="text-xs line-through text-gray-400">
              ${(product.precio + product.descuento).toFixed(2)}
            </span>
          )}
        </div>
        <div className="mt-2"></div>
      </div>
    </div>
  );
}

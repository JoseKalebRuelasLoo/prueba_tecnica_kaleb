"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import type { Product } from "@/lib/types";
import useProductsHook from "@/hook/hook";

// Página de detalle de producto
export default function ProductDetailPage() {
  const [imgIndex, setImgIndex] = useState(0);

  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { getProductById } = useProductsHook();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // Carga el producto al montar el componente
  useEffect(() => {
    async function fetchProduct() {
      const prod = await getProductById(Number(id));
      setProduct(prod);
      setLoading(false);
    }
    fetchProduct();
  }, [id, getProductById]);

  if (loading) {
    return <div className="p-8">Cargando producto...</div>;
  }

  if (!product) {
    return (
      <div className="p-8">
        {/* Botón para volver */}
        <button
          className="mb-4 px-4 py-2 bg-gray-200 rounded"
          onClick={() => router.back()}
        >
          ← Volver
        </button>
        <h2 className="text-xl font-bold text-red-600">
          Producto no encontrado
        </h2>
      </div>
    );
  }

  // Arreglo de imágenes del producto
  const images = [
    { url: product.imagen_principal, id: "principal" },
    ...product.imagenes.map((img) => ({ url: img.url, id: img.id })),
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Galería de imágenes */}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative w-full max-w-md">
            <img
              src={images[imgIndex].url}
              alt={product.nombre}
              className="w-full h-72 object-contain rounded border"
            />
            {/* Botón anterior */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                disabled={imgIndex === 0}
                onClick={() => setImgIndex((i) => Math.max(i - 1, 0))}
                className="bg-white/80 hover:bg-white text-xl px-2 py-1 rounded-l disabled:opacity-50"
              >
                ◀
              </button>
            </div>
            {/* Botón siguiente */}
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                disabled={imgIndex === images.length - 1}
                onClick={() =>
                  setImgIndex((i) => Math.min(i + 1, images.length - 1))
                }
                className="bg-white/80 hover:bg-white text-xl px-2 py-1 rounded-r disabled:opacity-50"
              >
                ▶
              </button>
            </div>
          </div>
          {/* Miniaturas de imágenes */}
          <div className="flex gap-2 mt-3">
            {images.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setImgIndex(idx)}
                className={`w-12 h-12 rounded border ${
                  imgIndex === idx ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <img
                  src={img.url}
                  alt=""
                  className="w-full h-full object-cover rounded"
                />
              </button>
            ))}
          </div>
        </div>
        {/* Información del producto */}
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{product.nombre}</h1>
          <p className="text-gray-500">{product.categoria}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-2xl font-bold text-green-600">
              ${product.precio.toFixed(2)}
            </span>
            {product.oferta && product.descuento > 0 && (
              <span className="text-xs line-through text-gray-400">
                ${(product.precio + product.descuento).toFixed(2)}
              </span>
            )}
            {product.oferta && (
              <span className="ml-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                Oferta {product.descuento > 0 && `-${product.descuento}%`}
              </span>
            )}
          </div>
          {/* Calificación */}
          <div className="flex items-center gap-1 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={
                  i < Math.round(product.calificacion)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              >
                ★
              </span>
            ))}
            <span className="ml-1 text-xs text-gray-500">
              {product.calificacion.toFixed(1)}
            </span>
          </div>
          <p className="mt-4">{product.descripcion}</p>
          <div className="mt-4">
            <span className="font-semibold">Stock:</span> {product.stock}
          </div>
          <div className="mt-2">
            <span className="font-semibold">SKU:</span> {product.sku}
          </div>
        </div>
      </div>
    </div>
  );
}

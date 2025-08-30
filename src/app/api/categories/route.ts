import { NextResponse } from "next/server";
import products from "@/Data.json";
import type { Product } from "@/lib/types";

// Endpoint para obtener todas las categorías únicas de productos
export async function GET() {
  try {
    // Extrae las categorías únicas de los productos
    const categories = [
      ...new Set(
        (products as unknown as Product[]).map(
          (product: Product) => product.categoria
        )
      ),
    ];

    // Responde con la lista de categorías
    return NextResponse.json({
      status: "success",
      data: categories,
      message: "Categories obtained successfully",
    });
  } catch {
    // Manejo de error
    return NextResponse.json(
      {
        status: "error",
        message: "Error obtaining categories",
      },
      { status: 500 }
    );
  }
}

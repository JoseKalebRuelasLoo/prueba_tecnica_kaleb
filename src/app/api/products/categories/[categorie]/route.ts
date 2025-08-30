import { NextResponse } from "next/server";
import products from "@/Data.json";
import type { Product } from "@/lib/types";

export async function GET(
  req: Request,
  context: { params: Promise<{ categorie: string }> }
) {
  try {
    // Obtiene la categoría de los parámetros
    const { categorie } = await context.params;

    // Obtiene parámetros de paginación
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const start = (page - 1) * limit;
    const end = start + limit;

    // Filtra productos por categoría
    const productsByCategory = (products as unknown as Product[])
      .map((item) => ({
        ...item,
        fecha_creacion: new Date(item.fecha_creacion),
      }))
      .filter((item: Product) => item.categoria === categorie);

    // Responde con los productos filtrados y paginados
    return NextResponse.json({
      status: "success",
      data: productsByCategory.slice(start, end),
      message: "Products by category obtained successfully",
      pagination: {
        page,
        limit,
        total: productsByCategory.length,
      },
    });
  } catch (error) {
    // Manejo de error
    return NextResponse.json(
      {
        status: "error",
        message: "Error obtaining products by category: " + error,
      },
      { status: 500 }
    );
  }
}

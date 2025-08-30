import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Endpoint para obtener todas las categorías únicas de productos
export async function GET() {
  try {
    // Extrae las categorías únicas de los productos
    const categories = await prisma.producto.findMany({
      select: { categoria: true },
      distinct: ["categoria"],
    });

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

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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

    // Filtra productos por categoría
    const productsByCategory = await prisma.producto.findMany({
      where: { categoria: categorie },
      include: { imagenes: true },
    });

    // Responde con los productos filtrados y paginados
    return NextResponse.json({
      status: "success",
      data: productsByCategory.slice(start, start + limit),
      message: "Products by category obtained successfully",
      pagination: {
        page,
        limit,
        total: Math.ceil(productsByCategory.length / limit),
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

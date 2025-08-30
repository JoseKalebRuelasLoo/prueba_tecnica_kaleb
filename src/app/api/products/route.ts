import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Endpoint para obtener productos con paginación
export async function GET(req: Request) {
  try {
    // Obtener parámetros de paginación de la URL
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    // Calcular el rango de productos a devolver
    const start = (page - 1) * limit;

    // Obtener los productos
    const products = await prisma.producto.findMany({
      include: { imagenes: true },
    });

    // Respuesta exitosa con datos y paginación
    return NextResponse.json({
      status: "success",
      data: products.slice(start, start + limit),
      message: "Products obtained successfully",
      pagination: {
        page,
        limit,
        total: Math.ceil(products.length / limit),
      },
    });
  } catch (error) {
    // Manejo de errores
    return NextResponse.json(
      {
        status: "error",
        message: "Error obtaining products: " + error,
      },
      { status: 500 }
    );
  }
}

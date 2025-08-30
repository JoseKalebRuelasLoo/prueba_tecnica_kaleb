import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    // Obtiene el parámetro de búsqueda
    const { searchParams } = new URL(req.url);
    const q = (searchParams.get("q") || "").toLowerCase();

    // Busca productos en la base de datos
    const products = await prisma.producto.findMany({
      where: { nombre: { contains: q } },
    });

    // Filtra productos por nombre, descripción o categoría
    const filteredProducts = products.filter(
      (p) =>
        p.nombre.toLowerCase().includes(q) ||
        p.descripcion.toLowerCase().includes(q) ||
        p.categoria.toLowerCase().includes(q)
    );

    // Paginación
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const start = (page - 1) * limit;
    const end = start + limit;

    // Responde con los productos filtrados y paginados
    return NextResponse.json({
      status: "success",
      data: filteredProducts.slice(start, end),
      message: "",
      pagination: {
        page,
        limit,
        total: filteredProducts.length,
      },
    });
  } catch (error) {
    // Manejo de error
    return NextResponse.json(
      {
        status: "error",
        message: "Error al buscar productos",
      },
      { status: 500 }
    );
  }
}

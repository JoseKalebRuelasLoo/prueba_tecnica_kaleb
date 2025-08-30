import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Endpoint para obtener un producto por su ID
export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // Obtiene el id de los parámetros
    const { id } = await context.params;

    // Busca el producto por id en la base de datos usando Prisma
    const product = await prisma.producto.findUnique({
      where: { id: Number(id) },
      include: { Imagen: true },
    });

    // Si no se encuentra el producto
    if (!product) {
      return NextResponse.json(
        {
          status: "error",
          message: "Product not found",
        },
        { status: 404 }
      );
    }

    // Responde con el producto encontrado
    return NextResponse.json({
      status: "success",
      data: product,
      message: "Product obtained successfully",
    });
  } catch (error) {
    // Manejo de error
    return NextResponse.json(
      {
        status: "error",
        message: "Error obtaining product: " + error,
      },
      { status: 500 }
    );
  }
}

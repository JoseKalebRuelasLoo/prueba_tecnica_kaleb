import { NextResponse } from "next/server";
import products from "@/Data.json";
import type { Product } from "@/lib/types";

// Endpoint para obtener un producto por su ID
export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // Obtiene el id de los parámetros
    const { id } = await context.params;

    // Busca el producto por id
    const product = (products as unknown as Product[]).find(
      (item: Product) => String(item.id) === id
    );

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

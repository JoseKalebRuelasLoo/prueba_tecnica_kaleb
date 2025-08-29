import { NextResponse } from "next/server";
import products from "@/Data.json";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const q = (searchParams.get("q") || "").toLowerCase();

    const filteredProducts = products.filter(
      (p) =>
        p.nombre.toLowerCase().includes(q) ||
        p.descripcion.toLowerCase().includes(q) ||
        p.categoria.toLowerCase().includes(q)
    );

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const start = (page - 1) * limit;
    const end = start + limit;

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
    return NextResponse.json(
      {
        status: "error",
        message: "Error al buscar productos",
      },
      { status: 500 }
    );
  }
}

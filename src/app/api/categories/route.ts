import { NextResponse } from "next/server";
import products from "@/Data.json";
import type { Product } from "@/lib/types";

export async function GET() {
  try {
    const categories = [
      ...new Set(
        (products as unknown as Product[]).map(
          (product: Product) => product.categoria
        )
      ),
    ];

    return NextResponse.json({
      status: "success",
      data: categories,
      message: "Categories obtained successfully",
    });
  } catch {
    return NextResponse.json(
      {
        status: "error",
        message: "Error obtaining categories",
      },
      { status: 500 }
    );
  }
}

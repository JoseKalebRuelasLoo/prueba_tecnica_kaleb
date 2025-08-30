import { NextResponse } from "next/server";
import products from "@/Data.json";
import type { Product } from "@/lib/types";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const product = (products as unknown as Product[]).find(
      (item: Product) => String(item.id) === id
    );

    return NextResponse.json({
      status: "success",
      data: product,
      message: "Product obtained successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Error obtaining product: " + error,
      },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import products from "@/Data.json";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const start = (page - 1) * limit;
    const end = start + limit;

    const paginatedProducts = products.slice(start, end);

    return NextResponse.json({
      status: "success",
      data: paginatedProducts,
      message: "Products obtained successfully",
      pagination: {
        page,
        limit,
        total: products.length,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Error obtaining products: " + error,
      },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import products from "@/Data.json";

export async function GET(
  req: Request,
  { params }: { params: { categorie: string } }
) {
  try {
    const categorie = params.categorie;

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const start = (page - 1) * limit;
    const end = start + limit;

    const productsByCategory = products.filter(
      (item) => item.categoria === categorie
    );

    return NextResponse.json({
      status: "success",
      data: productsByCategory.slice(start, end),
      message: "Products by category obtained successfully",
      pagination: {
        page,
        limit,
        total: productsByCategory.length,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Error obtaining products by category",
      },
      { status: 500 }
    );
  }
}

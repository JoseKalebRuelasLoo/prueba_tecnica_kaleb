import { NextResponse } from "next/server";
import products from "@/Data.json";

export async function GET(
  _req: Request,
  { params }: { params: { id: number } }
) {
  try {
    const id = params.id;
    const product = products.find((item) => item.id === id);

    return NextResponse.json({
      status: "success",
      data: product,
      message: "Product obtained successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Error obtaining product",
      },
      { status: 500 }
    );
  }
}

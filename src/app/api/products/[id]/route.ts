import { NextResponse } from "next/server";
import products from "@/Data.json";

export async function GET(req: Request, context: { params: { id: string } }) {
  try {
    const id = Number(context.params.id);
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

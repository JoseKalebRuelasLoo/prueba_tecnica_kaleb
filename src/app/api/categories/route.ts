import { NextResponse } from "next/server";
import categories from "@/Data.json";

export async function GET(req: Request) {
  try {
    return NextResponse.json({
      status: "success",
      data: categories,
      message: "Categories obtained successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Error obtaining categories",
      },
      { status: 500 }
    );
  }
}

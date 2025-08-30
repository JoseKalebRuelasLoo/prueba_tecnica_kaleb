//Middleware para respuestas
import { NextResponse } from "next/server";

export function successResponse(
  data: any,
  message = "Operación exitosa",
  pagination: any = null
) {
  return NextResponse.json({
    status: "success",
    data,
    message,
    ...(pagination && { pagination }),
  });
}

export function errorResponse(
  message = "Error interno del servidor",
  status = 500
) {
  return NextResponse.json(
    {
      status: "error",
      message,
    },
    { status }
  );
}

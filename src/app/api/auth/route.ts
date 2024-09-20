/* eslint-disable no-duplicate-imports */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const data = await req.json();
    console.log(data);

    if (!data) {
      return NextResponse.json(
        { message: "Solicitud inválida", status: 400 },
        { status: 400 },
      );
    }

    console.log(data);
    return NextResponse.json({
      message: "Datos recibidos correctamente",
      data,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error procesando la solicitud", status: 500 },
      { status: 500 },
    );
  }
}

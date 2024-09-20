/* eslint-disable @typescript-eslint/naming-convention */
import { NextResponse, type NextRequest } from "next/server";

const API_BACKEND = process.env.NEXT_PUBLIC_API_BACKEND;

if (!API_BACKEND) {
  throw new Error("API base URL is missing");
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const data = await req.json();

    const res = await fetch(`${API_BACKEND}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      credentials: "include",
    });

    if (!res.ok) {
      return new NextResponse(JSON.stringify({ message: "Registro exitoso" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const cookies = res.headers.get("set-cookie");

    return new NextResponse(JSON.stringify({ message: "Registro exitoso" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...(cookies ? { "Set-Cookie": cookies } : {}),
      },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Error al Registro" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

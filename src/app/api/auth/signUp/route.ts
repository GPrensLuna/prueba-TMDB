/* eslint-disable @typescript-eslint/naming-convention */
import { NextResponse, type NextRequest } from "next/server";

const API_BACKEND = process.env.NEXT_PUBLIC_API_BACKEND;

if (!API_BACKEND) {
  throw new Error("API base URL is missing");
}

export async function POST(req: NextRequest): Promise<Response> {
  try {
    const data = await req.json();
    const authToken = req.cookies.get("Authentication");

    const res = await fetch(`${API_BACKEND}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authentication: `Bearer ${authToken?.value}`,
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        username: data.username,
      }),
      credentials: "include",
    });

    if (!res.ok) {
      return new NextResponse(JSON.stringify({ message: "Registro exitoso" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new NextResponse(JSON.stringify({ message: "Registro exitoso" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new NextResponse(JSON.stringify({ message: "Error al Registro" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

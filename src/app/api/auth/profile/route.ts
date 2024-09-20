/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-duplicate-imports */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
const API_BACKEND = process.env.NEXT_PUBLIC_API_BACKEND;

if (!API_BACKEND) {
  throw new Error("API base URL is missing");
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const authToken = req.cookies.get("Authentication");
    const res = await fetch(`${API_BACKEND}/auth/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authentication: `Bearer ${authToken?.value}`,
      },
    });
    if (!res.ok) {
      return new NextResponse(JSON.stringify({ message: "Registro exitoso" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const cookies = res.headers.get("set-cookie");
    const data = await res.json();
    console.log(data);
    return new NextResponse(JSON.stringify({ data }), {
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

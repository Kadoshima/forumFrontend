import { NextRequest, NextResponse } from "next/server";

interface LoginResponse {
  token?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { student_id, password } = await request.json();
    const baseURL = process.env.NEXT_PUBLIC_ENDPOINT;

    if (!baseURL) {
      throw new Error("NEXT_PUBLIC_ENDPOINT is not defined");
    }

    const response = await fetch(`${baseURL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ student_id, password }),
    });

    const data: LoginResponse = await response.json();

    if (response.ok) {
      return NextResponse.json({ token: data.token }, { status: 200 });
    } else if (response.status === 400) {
      return NextResponse.json(
        { error: "学籍番号、もしくはパスワードが違います" },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { error: "サーバーエラーが発生しました" },
        { status: 500 }
      );
    }
  } catch (e) {
    console.error("Login failed", e);
    return NextResponse.json(
      {
        error: "通信中にエラーが発生しました",
        details: e instanceof Error ? e.message : String(e),
      },
      { status: 500 }
    );
  }
}

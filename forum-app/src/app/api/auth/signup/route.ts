import { NextRequest, NextResponse } from "next/server";

interface SignupResponse {
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { StudentID, Nickname, Email, Password, DepartmentID, CourseID } =
      body;
    const baseURL = process.env.NEXT_PUBLIC_ENDPOINT;

    if (!baseURL) {
      throw new Error("NEXT_PUBLIC_ENDPOINT is not defined");
    }

    if (
      !StudentID ||
      !Nickname ||
      !Email ||
      !Password ||
      !DepartmentID ||
      !CourseID
    ) {
      return NextResponse.json(
        { error: "すべての項目を入力してください。" },
        { status: 400 }
      );
    }

    const response = await fetch(`${baseURL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        StudentID,
        Nickname,
        Email,
        Password,
        DepartmentID,
        CourseID,
      }),
    });

    const data: SignupResponse = await response.json();

    if (response.ok) {
      return NextResponse.json(
        { message: "サインアップが成功しました。" },
        { status: 201 }
      );
    } else if (response.status === 400) {
      return NextResponse.json(
        {
          error: "この学籍番号のアカウントは既に存在しています",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました。" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { PostResponse } from "@/types/PostTypes";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_ENDPOINT;
    const { id } = params;

    if (!baseURL) {
      throw new Error("NEXT_PUBLIC_ENDPOINT is not defined.");
    }

    const token = request.headers.get("Authorization");

    if (!token) {
      return NextResponse.json(
        { error: "Token is required." },
        { status: 401 }
      );
    }

    const response = await fetch(`${baseURL}/posts/get?forum_id=${id}`, {
      method: "GET",
      headers: {
        Content_Type: "application/json",
        Authorization: token,
      },
    });

    if (response.status === 401) {
      return NextResponse.json(
        {
          error: "Unauthorized access",
        },
        { status: 401 }
      );
    }

    if (response.status === 400) {
      return NextResponse.json(
        {
          error: "Invalid request data",
        },
        { status: 400 }
      );
    }

    const data: PostResponse = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    console.error("Fetching forum data failed", e);
    return NextResponse.json(
      {
        error: "An error occurred while communicating with the server",
        details: e instanceof Error ? e.message : String(e),
      },
      { status: 500 }
    );
  }
}

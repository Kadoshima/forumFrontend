import { NextRequest, NextResponse } from "next/server";
import { ForumRequest, ForumResponse } from "@/types/ForumTypes";

export async function GET(request: NextRequest) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_ENDPOINT;

    if (!baseURL) {
      throw new Error("NEXT_PUBLIC_ENDPOINT is not defined");
    }

    const token = request.headers.get("Authorization");

    if (!token) {
      return NextResponse.json({ error: "Token is required" }, { status: 401 });
    }

    const response = await fetch(`${baseURL}/forum/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      if (response.status === 400) {
        return NextResponse.json(
          { error: "Invalid request data" },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { error: "Server error occurred" },
        { status: 500 }
      );
    }

    const data: ForumResponse = await response.json();

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

export async function POST(request: NextRequest) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_ENDPOINT;

    if (!baseURL) {
      throw new Error("NEXT_PUBLIC_ENDPOINT is not defined");
    }

    const token = request.headers.get("Authorization");

    if (!token) {
      return NextResponse.json({ error: "Token is required" }, { status: 401 });
    }

    const body: ForumRequest = await request.json();

    if (!body.Title || !body.Description || !body.Category) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const response = await fetch(`${baseURL}/forum/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        Title: body.Title,
        Description: body.Description,
        Visibility: body.Visibility,
        Category: body.Category,
        Attachments: body.Attachment,
        Moderators: body.Moderators,
      }),
    });

    if (!response.ok) {
      if (response.status === 400) {
        return NextResponse.json(
          { error: "Invalid request data" },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { error: "Server error occurred" },
        { status: 500 }
      );
    }

    const data: ForumResponse = await response.json();

    return NextResponse.json(data, { status: 201 });
  } catch (e) {
    console.error("Creating forum failed", e);
    return NextResponse.json(
      {
        error: "An error occurred while communicating with the server",
        details: e instanceof Error ? e.message : String(e),
      },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_META_API}/random-anime`,
      { cache: "no-store" },
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch random anime" },
        { status: res.status },
      );
    }

    const data = await res.json();

    // Only expose what the client needs
    return NextResponse.json({ id: data.id });
  } catch (error) {
    console.error("Random anime error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

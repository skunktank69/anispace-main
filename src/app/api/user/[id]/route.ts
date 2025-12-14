import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    const numericId = Number(id);

    if (Number.isNaN(numericId)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: numericId },
      include: {
        readList: true,
        watchList: true,
        posts: true,
        comments: true,
        likes: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (err) {
    console.error("USER API ERROR:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

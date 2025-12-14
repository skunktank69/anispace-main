import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

// CREATE COMMENT
export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = await getUserFromRequest(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const postId = Number((await params).id);
  const { content } = await req.json();

  try {
    const comment = await prisma.comment.create({
      data: {
        postId,
        userId: user.id,
        content,
      },
      include: { user: true },
    });

    return NextResponse.json({ comment });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Comment failed" }, { status: 500 });
  }
}

// GET ALL COMMENTS FOR POST
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const postId = Number((await params).id);

  try {
    const comments = await prisma.comment.findMany({
      where: { postId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ comments });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to get comments" },
      { status: 500 },
    );
  }
}

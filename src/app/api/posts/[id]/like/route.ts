import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = await getUserFromRequest(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const postId = Number((await params).id);

  try {
    const existing = await prisma.like.findUnique({
      where: { postId_userId: { postId, userId: user.id } },
    });

    if (existing) {
      await prisma.like.delete({ where: { id: existing.id } });
      return NextResponse.json({ liked: false });
    }

    await prisma.like.create({ data: { postId, userId: user.id } });
    return NextResponse.json({ liked: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Like failed" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = await getUserFromRequest(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const postId = Number((await params).id);

  try {
    // find the like first
    const existing = await prisma.like.findUnique({
      where: { postId_userId: { postId, userId: user.id } },
    });

    if (!existing) {
      return NextResponse.json({ error: "Not liked" }, { status: 400 });
    }

    await prisma.like.delete({ where: { id: existing.id } });

    return NextResponse.json({ liked: false });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Unlike failed" }, { status: 500 });
  }
}

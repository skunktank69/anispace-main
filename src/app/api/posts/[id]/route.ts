import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const postId = Number((await params).id);

  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
      include: {
        user: true,
        images: true,
        comments: {
          include: { user: true },
          orderBy: { createdAt: "asc" },
        },
        likes: true,
      },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const postId = Number(id);

  const user = await getUserFromRequest(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    // Fetch post to check ownership
    const post = await prisma.post.findUnique({
      where: { id: postId },
      include: {
        user: true,
        images: true,
        comments: {
          include: { user: true },
          orderBy: { createdAt: "asc" },
        },
        likes: true,
      },
    });

    if (!post)
      return NextResponse.json({ error: "Post not found" }, { status: 404 });

    if (user.id !== post.user.id)
      return NextResponse.json({ error: user.id }, { status: 401 });

    await prisma.postImage.deleteMany({ where: { postId } });
    await prisma.comment.deleteMany({ where: { postId } });
    await prisma.like.deleteMany({ where: { postId } });

    // Now delete the post
    await prisma.post.delete({
      where: { id: postId },
    });

    return NextResponse.json({
      message: "Post deleted successfully",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 },
    );
  }
}

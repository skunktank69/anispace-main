import { getUserFromRequest } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// DELETE COMMENT
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string; commentId: number }> },
) {
  const user = await getUserFromRequest(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const postId = Number((await params).id);
  const commentId = Number((await params).commentId);

  try {
    const comment = await prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!comment || comment.postId !== postId)
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });

    if (comment.userId !== user.id)
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    await prisma.comment.delete({ where: { id: commentId } });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}

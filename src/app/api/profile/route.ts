import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

interface ProfileBody {
  name?: string;
  avatar?: string;
  /*eslint-disable */
  [x: string]: any;
}

export async function PUT(req: Request) {
  const user = await getUserFromRequest(req);

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json()) as ProfileBody;

  const updated = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name ?? user.name,
      avatar: body.avatar ?? user.avatar,
      readList: body.readList,
    },
  });

  return NextResponse.json(
    {
      id: updated.id,
      email: updated.email,
      name: updated.name,
      avatar: updated.avatar,
    },
    { status: 200 },
  );
}

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  const session = await getServerSession();
  if (!session?.user?.id) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { items } = await req.json();
  if (!Array.isArray(items)) {
    return new Response("Invalid payload", { status: 400 });
  }

  const userId = session.user.id;

  const ops = items.map((item) =>
    prisma.recentItem.upsert({
      where: {
        userId_providerId_type: {
          userId,
          providerId: item.providerId,
          type: item.type,
        },
      },
      update: {
        title: item.title,
        onEpisode: item.onEpisode,
        timestamps: item.timestamps,
        UpdatedAt: new Date(),
        color: item.color,
      },
      create: {
        userId,
        provider: item.provider,
        providerId: item.providerId,
        title: item.title,
        onEpisode: item.onEpisode,
        timestamps: item.timestamps,
        type: item.type,
        color: item.color,
      },
    }),
  );

  await prisma.$transaction(ops);

  return Response.json({ success: true });
}

import { NextResponse } from "next/server";
import { getUserFromRequest } from "@/lib/auth";
import { cookies } from "next/headers";

export async function GET(req: Request) {
  const user = await getUserFromRequest(req);
  if (!user) {
    return NextResponse.json({ user: null }, { status: 200 });
  }
  return NextResponse.json({ user }, { status: 200 });
}

export async function POST() {
  const store = await cookies();
  store.delete("ani_token");

  return NextResponse.json({ success: true });
}

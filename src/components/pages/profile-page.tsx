"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type User = {
  user: {
    id: number;
    name: string | null;
    email: string | null;
    avatar: string | null;
    createdAt: string | null;
  };
};

export default function ProfilePageClient({ userId }: { userId: string }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await fetch(`/api/users/${userId}`, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch user");
        const data: User = await res.json();
        setUser(data);
      } catch (err) {
        console.error("profile fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, [userId]);

  if (loading) {
    return <div className="p-8 text-center text-lg">Loading profile…</div>;
  }

  if (!user) {
    return (
      <div className="p-8 text-center text-lg text-red-500">
        User not found.
      </div>
    );
  }

  const joinDate = user.user.createdAt
    ? new Date(user.user.createdAt).toLocaleDateString()
    : "Unknown";
  // console.log(`yooo${user.user.readList}`);
  return (
    <div className="max-w-3xl mx-auto p-10">
      <div className="flex flex-col items-center gap-5">
        <Image
          src={user.user.avatar ?? "/default-avatar.png"}
          alt="user avatar"
          width={150}
          height={150}
          className="rounded-full border"
          unoptimized
        />

        <h1 className="text-3xl font-bold">
          {user.user.name || "Unnamed User"}
        </h1>

        <p className="text-gray-600">@{user.user.name ?? ""}</p>

        <div className="mt-6 w-full  p-5 rounded-lg">
          <p className="mt-4 text-sm text-gray-500">Joined: {joinDate}</p>
        </div>
      </div>
    </div>
  );
}

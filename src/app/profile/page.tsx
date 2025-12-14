"use client";

import { CardGrid } from "@/components/card-grid";
import ProfileCardGrid from "@/components/profile-card";
import ProfileMangaCard from "@/components/profile-manga-card";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState<{
    id: number;
    email: string;
    name?: string;
    avatar?: string;
    readList?: [];
    watchList?: [];
  } | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        setUser(data.user ?? null);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  console.log(user);

  if (loading) {
    return <div className="mx-auto max-w-3xl px-4 py-10 text-lg">Loading…</div>;
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 text-lg">
        You are not logged in.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Your Profile</h1>

      <div className="flex items-center gap-6">
        <img
          src={user.avatar || "/default-avatar.jpg"}
          alt="Avatar"
          className="h-24 w-24 rounded-full object-cover"
        />

        <div>
          <p className="text-xl font-semibold">{user.name || "Unnamed User"}</p>
          <p className="text-muted-foreground">{user.email}</p>
        </div>
      </div>

      <div className="mt-8">
        <a
          href="/profile/edit"
          className="inline-block rounded bg-primary px-4 py-2 text-secondary hover:opacity-90"
        >
          Edit Profile
        </a>
      </div>
      <div className="mt-6">
        <p className="font-bold text-3xl">Reading List</p>
        <div className="p-4">
          <ProfileCardGrid
            items={user.readList}
            CardComponent={ProfileMangaCard}
          />
        </div>
      </div>
      <div className="mt-6">
        <p className="font-bold text-3xl">Watching List</p>
        <div className="p-4">
          <ProfileCardGrid
            items={user.watchList}
            CardComponent={ProfileMangaCard}
          />
        </div>
      </div>
    </div>
  );
}

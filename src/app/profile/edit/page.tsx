"use client";

import { useEffect, useState } from "react";

export default function ProfileEditPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    avatar: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if (data.user) {
          setForm({
            name: data.user.name || "",
            email: data.user.email || "",
            avatar: data.user.avatar || "",
          });
        }
      } catch ({ err }) {
        return err;
      }
      setLoading(false);
    }
    fetchProfile();
  }, []);

  /*eslint-disable */
  async function handleSubmit(e: any) {
    e.preventDefault();
    setSaving(true);

    try {
      await fetch("/api/user/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      window.location.href = "/profile";
    } catch (err) {}

    setSaving(false);
  }

  if (loading) {
    return <div className="mx-auto max-w-2xl px-4 py-10">Loading…</div>;
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold">Edit Profile</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="mb-1 block text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full rounded border bg-background p-2"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full rounded border bg-background p-2"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Avatar URL</label>
          <input
            type="text"
            className="w-full rounded border bg-background p-2"
            value={form.avatar}
            onChange={(e) => setForm({ ...form, avatar: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="rounded bg-primary px-4 py-2 text-secondary hover:opacity-90"
          disabled={saving}
        >
          {saving ? "Saving…" : "Save Changes"}
        </button>
      </form>
    </div>
  );
}

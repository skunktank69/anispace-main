"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CommentsModal({ postId, open, onClose }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;

    let cancelled = false;

    async function load() {
      // Only update state inside async function
      setLoading(true);

      try {
        const res = await fetch(`/api/posts/${postId}/comments`);
        const data = await res.json();

        if (!cancelled) {
          setComments(data.comments || []);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [open, postId]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-neutral-900 w-full max-w-lg rounded-xl shadow-xl p-6 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold tracking-tight">Comments</h2>
          <button
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            ✕
          </button>
        </div>

        {loading ? (
          <div className="py-10 text-center text-neutral-500">
            Loading comments…
          </div>
        ) : comments.length === 0 ? (
          <div className="py-10 text-center text-neutral-500">
            No comments yet.
          </div>
        ) : (
          <div className="space-y-4">
            {comments.map((c) => (
              <div
                key={c.id}
                className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-3 flex flex-col"
              >
                <Link
                  href={`/api/user/${c.user.id}`}
                  className="font-medium text-sm text-neutral-800 dark:text-neutral-100"
                >
                  {c.user?.name ?? "Unknown User"}
                </Link>

                <p className="text-neutral-700 dark:text-neutral-300 text-sm mt-1">
                  {c.content}
                </p>

                <span className="text-neutral-400 text-xs mt-2">
                  {new Date(c.createdAt).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

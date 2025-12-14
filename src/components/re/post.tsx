"use client";

import { Heart, MessageCircleMore } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardFooter } from "../ui/card";

import { useEffect, useState } from "react";
import Image from "next/image";
import timeAgo from "@/lib/estimations";
import CommentsModal from "../comment-modal";

export default function Post(props: {
  id: number;
  title: string;
  content: string;
  user: string;
  avatar: string;
  images: { id: number; url: string }[];
  createdAt: string;
  comments: number;
  likes: { userId: number }[];
}) {
  const [me, setMe] = useState<number | null>(null);
  const [showComments, setShowComments] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(props.likes.length);

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        const id = data?.user?.id;

        setMe(id);
        setLiked(props.likes.some((l) => l.userId === id));
        setLikeCount(props.likes.length);
      } catch {
        setMe(null);
      }
    }
    loadUser();
  }, [props.likes]);

  const handleLiked = async () => {
    if (!me) return;
    const prevLiked = liked;
    const prevCount = likeCount;

    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);

    try {
      const method = liked ? "DELETE" : "POST";
      const res = await fetch(`/api/posts/${props.id}/like`, { method });
      if (!res.ok) throw new Error("fail");
    } catch {
      setLiked(prevLiked);
      setLikeCount(prevCount);
    }
  };

  const imgs = props.images || [];
  const imgCount = imgs.length;

  return (
    <div className="w-full">
      <Card className="w-full border shadow-sm rounded-2xl min-h-[250px] max-h-[200px] flex flex-col">
        <CardContent className="pt-4 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="ring-2 ring-ring h-10 w-10">
              <AvatarImage src={props.avatar} alt="user avatar" />
              <AvatarFallback className="text-xs">?</AvatarFallback>
            </Avatar>

            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-sm">{props.user}</span>
              <span className="text-xs">{timeAgo(props.createdAt)}</span>
            </div>
          </div>

          <h2 className="font-bold text-lg mb-1">{props.title}</h2>
          <p className="text-sm text-secondary-foreground/50 mb-3 line-clamp-3 md:line-clamp-4">
            {props.content}
          </p>
        </CardContent>

        {/* FOOTER */}
        <div className="w-full px-4 mt-auto">
          <CardFooter className="flex gap-2 items-center pt-0 p-1.5 px-6 bg-sidebar-border/10 rounded-lg align-middle">
            {/* LIKE BUTTON */}
            <div
              className="flex items-center gap-2 cursor-pointer select-none p-2 bg-card-foreground/5 rounded-lg border "
              onClick={handleLiked}
            >
              <Heart
                stroke={liked ? "#ef4444" : "#9e9e9e"}
                fill={liked ? "#ef4444" : "transparent"}
                className="h-5 w-5 transition-all"
              />
              <span className="text-sm text-foreground/60">{likeCount}</span>
            </div>

            {/* COMMENTS BUTTON */}
            <div
              className="flex items-center gap-2 cursor-pointer select-none p-2 bg-card-foreground/5 rounded-lg border "
              onClick={() => setShowComments(true)}
            >
              <MessageCircleMore
                stroke={"#9e9e9e"}
                fill={"transparent"}
                className="h-5 w-5 transition-all"
              />
              <span className="text-sm text-foreground/60">
                {props.comments}
              </span>
            </div>
          </CardFooter>
        </div>
      </Card>

      {/* COMMENTS MODAL */}
      <CommentsModal
        postId={props.id}
        open={showComments}
        onClose={() => setShowComments(false)}
      />
    </div>
  );
}

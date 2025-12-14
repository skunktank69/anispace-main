"use client";

import { useEffect, useState } from "react";
import Post from "@/components/re/post";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PencilLine } from "lucide-react";

interface PostType {
  id: number;
  title: string;
  content: string;
  images: { id: number; url: string }[];
  likes: any[];
  createdAt: string;
  comments: [];
  user: { id: string; name: string; avatar: string };
}

interface PostsResponse {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  posts: PostType[];
}

export default function PostPage(props: { page: number; limit: number }) {
  const [postsData, setPostsData] = useState<PostsResponse | null>(null);
  const [currentPage, setCurrentPage] = useState(props.page || 1);

  const origin = typeof window !== "undefined" ? window.location.origin : "";

  useEffect(() => {
    async function load() {
      const res = await fetch(
        `${origin}/api/posts?page=${currentPage}&limit=${props.limit || 10}`,
      );
      const data = await res.json();
      setPostsData(data);
    }

    if (origin) load();
  }, [currentPage, props.limit, origin]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getVisiblePages = () => {
    if (!postsData) return [];
    const total = postsData.totalPages;
    const curr = currentPage;

    if (total <= 3) return Array.from({ length: total }, (_, i) => i + 1);
    if (curr <= 2) return [1, 2, 3];
    if (curr >= total - 1) return [total - 2, total - 1, total];
    return [curr - 1, curr, curr + 1];
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="relative flex flex-col gap-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold">Posts</h1>

      {/* Responsive Post Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {postsData?.posts?.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            user={post.user.name}
            avatar={post.user.avatar}
            likes={post.likes}
            images={post.images}
            createdAt={post.createdAt}
            comments={post.comments.length}
          />
        ))}
      </div>

      {/* Pagination */}
      {postsData && postsData.totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) handlePageChange(currentPage - 1);
                }}
              />
            </PaginationItem>

            {visiblePages[0] > 1 && (
              <>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(1);
                    }}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                {visiblePages[0] > 2 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
              </>
            )}

            {visiblePages.map((pageNum) => (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === pageNum}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(pageNum);
                  }}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            ))}

            {visiblePages[visiblePages.length - 1] < postsData.totalPages && (
              <>
                {visiblePages[visiblePages.length - 1] <
                  postsData.totalPages - 1 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(postsData.totalPages);
                    }}
                  >
                    {postsData.totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < postsData.totalPages)
                    handlePageChange(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      {/* Floating Create Post Button */}
      <a
        href="/posts/new"
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all"
        title="Create Post"
      >
        <PencilLine className="h-5 w-5" />
      </a>
    </div>
  );
}

"use client";

import React from "react";
import { Button } from "@/components/common/button";
import { ExpandIcon, FlipVerticalIcon } from "@/components/common/icon";
import Forum from "./Forum";
import ForumType from "@/types/ForumTypes";
import { useRouter } from "next/navigation";

interface ForumTypeListProps {
  posts: ForumType[];
}

export default function ForumList({ posts }: ForumTypeListProps): JSX.Element {
  const router = useRouter();

  const handleForumClick = (id: number) => {
    console.log(id);
    router.push(`/forum/${id}`);
  };

  return (
    <section className="mt-8 w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" className="text-white">
            Hot
          </Button>
          <Button variant="ghost" className="text-gray-400">
            Japan
          </Button>
          <Button variant="ghost" className="text-gray-400">
            <ExpandIcon className="w-5 h-5" />
          </Button>
        </div>
        <Button variant="ghost" className="text-gray-400">
          <FlipVerticalIcon className="w-5 h-5" />
        </Button>
      </div>
      {Array.isArray(posts) && posts.length > 0 && (
        <div className="space-y-4">
          {posts.map((post) => (
            <Forum
              key={post.ID}
              post={post}
              onClick={() => handleForumClick(post.ID)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

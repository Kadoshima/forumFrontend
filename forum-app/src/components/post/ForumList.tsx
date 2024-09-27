import React from "react";
import { Button } from "@/components/common/button";
import { ExpandIcon, FlipVerticalIcon } from "@/components/common/icon";
import PostCard from "./Forum";
import ForumType from "@/types/ForumTypes";

interface ForumTypeListProps {
  posts: ForumType[];
}

export default function ForumList({ posts }: ForumTypeListProps): JSX.Element {
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
            <PostCard key={post.ID} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}

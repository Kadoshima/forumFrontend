import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExpandIcon, FlipVerticalIcon } from "@/components/ui/Icon/icon";
import PostCard from "./PostCard";

interface Post {
  imageUrl: string;
  title: string;
  description: string;
  subChubuForum: string;
  timeAgo?: string;
  upvotes?: string;
  comments?: string;
  image?: string;
}

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps): JSX.Element {
  return (
    <section className="mt-8">
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
      <div className="space-y-4">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </section>
  );
}

import React from "react";
import { PostResponse } from "@/types/PostTypes";
import PostItem from "./Post";

interface PostListProps {
  posts: PostResponse[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostItem key={post.ID} post={post} />
      ))}
    </div>
  );
}

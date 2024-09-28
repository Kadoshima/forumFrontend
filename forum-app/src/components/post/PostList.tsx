import React from "react";
import { PostResponse } from "@/types/PostTypes";
import PostItem from "./Post";

interface PostListProps {
  posts: PostResponse[] | null;
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-200px)]">
      {posts !== null ? (
        posts.map((post) => <PostItem key={post.ID} post={post} />)
      ) : (
        <div className="text-center text-gray-500">投稿がありません</div>
      )}
    </div>
  );
}

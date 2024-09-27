import React from "react";
import { PostResponse } from "@/types/PostTypes";

interface PostItemProps {
  post: PostResponse;
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold mb-2">Post ID: {post.ID}</h2>
      <p className="text-gray-300 mb-2">{post.Content}</p>
      <p className="text-sm text-gray-400">
        Created At: {new Date(post.CreatedAt).toLocaleString()}
      </p>
    </div>
  );
}

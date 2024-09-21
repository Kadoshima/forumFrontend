import React from "react";
import { Card } from "@/components/ui/card";
import Post from "@/types/PostTypes";

interface TrendingPostsProps {
  posts: Post[];
}

export default function TrendingPosts({ posts }: TrendingPostsProps) {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {posts.map((post, index) => (
        <Card key={index} className="relative overflow-hidden h-64">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-lg font-bold mb-1">{post.title}</h3>
            <p className="text-sm text-gray-200 mb-1">{post.description}</p>
            <p className="text-xs text-gray-300">{post.subChubuForum}</p>
          </div>
        </Card>
      ))}
    </section>
  );
}

import React from "react";
import { Card } from "@/components/common/card";
import { Button } from "@/components/common/button";
import { ThumbsUpIcon, ReplyIcon, ShareIcon } from "@/components/common/icon";
import Post from "@/types/PostTypes";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps): JSX.Element {
  return (
    <Card className="p-4 bg-gray-800">
      <div className="flex items-start space-x-4">
        {post.image && (
          <div className="flex-shrink-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-24 h-24 object-cover rounded-md"
            />
          </div>
        )}
        <div className="flex-grow">
          <p className="text-sm text-gray-500">
            {post.subChubuForum} • {post.timeAgo}
          </p>
          <p className="text-lg font-bold">{post.title}</p>
          <p className="text-sm text-gray-400 mt-1">{post.description}</p>
          <div className="flex items-center space-x-4 mt-2">
            <Button variant="ghost" className="flex items-center space-x-1">
              <ThumbsUpIcon className="w-5 h-5" />
              <span>{post.upvotes}</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-1">
              <ReplyIcon className="w-5 h-5" />
              <span>{post.comments}</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-1">
              <ShareIcon className="w-5 h-5" />
              <span>Share</span>
            </Button>
          </div>
        </div>
        <Button variant="secondary" className="text-white">
          Join
        </Button>
      </div>
    </Card>
  );
}

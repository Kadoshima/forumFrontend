import React from "react";
import { Card } from "@/components/common/card";
import { Button } from "@/components/common/button";
import { ThumbsUpIcon, ReplyIcon, ShareIcon } from "@/components/common/icon";
import { ForumResponse } from "@/types/ForumTypes";
import Image from "next/image";

interface ForumProps {
  post: ForumResponse;
  onClick: () => void;
}

export default function Forum({ post, onClick }: ForumProps): JSX.Element {
  const timeAgo = new Date(post.CreatedAt).toLocaleDateString();

  return (
    <Card className="p-4 bg-gray-800" onClick={onClick}>
      <div className="flex items-start space-x-4">
        {post.Attachments && (
          <div className="flex-shrink-0">
            <img
              src={post.Attachments}
              alt={post.Title}
              className="w-24 h-24 object-cover rounded-md"
              width={500}
              height={300}
            />
          </div>
        )}
        <div className="flex-grow">
          <p className="text-sm text-gray-500">
            {post.Category} • {timeAgo}
          </p>
          <p className="text-lg font-bold">{post.Title}</p>
          <p className="text-sm text-gray-400 mt-1">{post.Description}</p>
          <div className="flex items-center space-x-4 mt-2">
            <Button variant="ghost" className="flex items-center space-x-1">
              <ThumbsUpIcon className="w-5 h-5" />
              <span>{post.NumPosts}</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-1">
              <ReplyIcon className="w-5 h-5" />
              <span>Comment</span>
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

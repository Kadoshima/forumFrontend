import React from 'react'
import { Card } from "@/components/ui/card"
import { ReplyIcon, InfoIcon, EllipsisIcon } from '@/components/Icons'
import { Post } from '@/types';

export default function ForumCard({ post }: { post: Post }) {
    return (
        <Card className="p-4 bg-gray-800">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-gray-500">{post.subreddit} • {post.timeAgo}</p>
                    <p className="text-lg font-bold">{post.title}</p>
                    {post.imageUrl && (
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-48 object-cover rounded-md mt-4"
                            width="300"
                            height="200"
                            style={{ aspectRatio: "300/200", objectFit: "cover" }}
                        />
                    )}
                    <div className="flex items-center space-x-4 mt-2">
                        <button className="flex items-center space-x-1 text-gray-300 hover:bg-gray-700 px-2 py-1 rounded">
                            <InfoIcon className="w-5 h-5" />
                            <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-300 hover:bg-gray-700 px-2 py-1 rounded">
                            <ReplyIcon className="w-5 h-5" />
                            <span>{post.comments}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-300 hover:bg-gray-700 px-2 py-1 rounded">
                            <EllipsisIcon className="w-5 h-5" />
                            <span>Share</span>
                        </button>
                    </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    Join
                </button>
            </div>
        </Card>
    )
}
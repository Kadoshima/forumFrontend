import React from 'react'
import { Card } from "@/components/ui/card"
import { Topic } from '@/types';

interface TopicCardProps {
    topic: Topic;
}

export default function TopicCard({ topic }: TopicCardProps) {
    return (
        <Card className="p-4 bg-gray-800">
            <img
                src={topic.imageUrl || "/placeholder.svg"}
                alt={topic.title}
                className="w-full h-32 object-cover rounded-md mb-4"
                width="300"
                height="150"
                style={{ aspectRatio: "300/150", objectFit: "cover" }}
            />
            <h3 className="text-lg font-bold">{topic.title}</h3>
            <p className="text-sm text-gray-400">{topic.description}</p>
            <p className="text-xs text-gray-500">{topic.subreddit}</p>
        </Card>
    )
}
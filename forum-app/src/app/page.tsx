'use client'

import React, { useEffect, useState } from 'react'
import * as Icons from '@/components/Icons'
import Sidebar from '@/components/Sidebar'
import TopicCard from '@/components/TopicCard'
import ForumCard from '@/components/ForumCard'
import PopularCommunities from '@/components/PopularCommunities'
import { Topic, Post, Community } from '@/types';


const ForumApp: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>([])
  const [posts, setPosts] = useState<Post[]>([])
  const [communities, setCommunities] = useState<Community[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topicsResponse = await fetch('http://localhost:3001/topics');
        const topicsData = await topicsResponse.json();
        setTopics(topicsData.slice(0, 4));

        const postsResponse = await fetch('http://localhost:3001/posts');
        const postsData = await postsResponse.json();
        setPosts(postsData);

        const communitiesResponse = await fetch('http://localhost:3001/popularCommunities');
        const communitiesData = await communitiesResponse.json();
        setCommunities(communitiesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3001/comments")
      const data = await res.json()
      setTopics(data.topics || [])
      setPosts(data.posts || [])
      setCommunities(data.communities || [])
      console.log(data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  return (
      <div className="flex min-h-screen bg-gray-900 text-white">
        <Sidebar />
        <main className="flex-1 p-4">
          <header className="flex items-center justify-between mb-8">
            {/* Header content here */}
          </header>

          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {topics.map(topic => (
                <TopicCard key={topic.id} topic={topic} />
            ))}
          </section>

          <section className="mt-8">
            {posts.map(post => (
                <ForumCard key={post.id} post={post} />
            ))}
          </section>
        </main>
        <PopularCommunities communities={communities} />
      </div>
  )
}

export default ForumApp
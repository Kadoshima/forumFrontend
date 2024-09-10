'use client'

import React, { useEffect, useState } from 'react'
import * as Icons from '@/components/Icons'
import Sidebar from '@/components/Sidebar'
import TopicCard from '@/components/TopicCard'
import ForumCard from '@/components/ForumCard'
import PopularCommunities from '@/components/PopularCommunities'
import { Topic , Forum } from '@/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const MyPage: React.FC = () => {
    const [topics, setTopics] = useState<Topic[]>([])
    const [forum, setForum] = useState<Forum[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const topicsResponse = await fetch('http://localhost:3001/topics');
                const topicsData = await topicsResponse.json();
                setTopics(topicsData.slice(0, 4));


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
                <div className="container mx-auto p-4 space-y-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                            <Avatar className="w-20 h-20">
                                <AvatarImage src="/placeholder.svg" alt="User avatar"/>
                                <AvatarFallback>UN</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-2xl">User Name</CardTitle>
                                <p className="text-sm text-muted-foreground">@username</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p>User bio or additional information can go here.</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-0">
                            <Tabs defaultValue="myposts" className="w-full">
                                <TabsList className="w-full">
                                    <TabsTrigger value="myposts" className="flex-1">MyPosts</TabsTrigger>
                                    <TabsTrigger value="myjoin" className="flex-1">MyJoin</TabsTrigger>
                                    <TabsTrigger value="mygood" className="flex-1">MyGood</TabsTrigger>
                                </TabsList>
                                <TabsContent value="myposts" className="p-4">
                                    <h3 className="text-lg font-semibold mb-2">My Posts</h3>
                                    <p>Here you can display the user's posts.</p>
                                </TabsContent>
                                <TabsContent value="myjoin" className="p-4">
                                    <h3 className="text-lg font-semibold mb-2">My Joined Communities</h3>
                                    <p>Here you can display the communities the user has joined.</p>
                                </TabsContent>
                                <TabsContent value="mygood" className="p-4">
                                    <h3 className="text-lg font-semibold mb-2">My Liked Pages</h3>
                                    <p>Here you can display the pages the user has liked.</p>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <PopularCommunities communities={communities}/>
        </div>
    )
}

export default MyPage
'use client'

import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, ThumbsUp, Share2, Home, User, TrendingUp } from "lucide-react"; // Sidebarアイコンは削除
import CustomSidebar from '@/components/Sidebar'; // カスタムSidebarを適切にインポート
import { User as UserType, Post } from '@/types';

const MyPage: React.FC = () => {
    const [user, setUser] = useState<UserType | null>(null);
    const [userForums, setUserForums] = useState<Post[]>([]);

    useEffect(() => {
        // ユーザーデータをフェッチする関数
        const fetchUserData = async () => {
            try {
                const userResponse = await fetch('http://localhost:3001/user');
                const userData = await userResponse.json();
                setUser(userData);

                const forumsResponse = await fetch('http://localhost:3001/userForums');
                const forumsData = await forumsResponse.json();
                setUserForums(forumsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchUserData();
    }, []);

    if (!user) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <CustomSidebar /> {/* Sidebarコンポーネントの呼び出し */}

            {/* Main content */}
            <main className="flex-1 overflow-y-auto p-6">
                {/* User profile */}
                <Card className="mb-6">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Avatar className="h-16 w-16">
                            <AvatarImage src={user.avatarUrl} alt={user.nickname} />
                            <AvatarFallback>{user.nickname.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle>{user.nickname}</CardTitle>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                            <p className="text-sm text-muted-foreground">学籍番号: {user.studentId}</p>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">学科ID: {user.departmentId} コースID: {user.courseId}</p>
                        <p className="text-sm text-muted-foreground">登録日: {new Date(user.createdAt).toLocaleDateString()} 最終更新日: {new Date(user.updatedAt).toLocaleDateString()}</p>
                    </CardContent>
                </Card>

                {/* Forum posts */}
                <h2 className="mb-4 text-2xl font-bold">作成したフォーラム</h2>
                <div className="space-y-4">
                    {userForums.map((post) => (
                        <Card key={post.id}>
                            <CardHeader>
                                <CardTitle>{post.content}</CardTitle>
                                <p className="text-sm text-muted-foreground">フォーラムID: {post.forumId} • 作成日: {new Date(post.createdAt).toLocaleDateString()}</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    タグ: {post.tags} • ステータス: {post.status}
                                </p>
                                {post.attachments.length > 0 && (
                                    <div className="mt-2">
                                        <p className="text-sm text-muted-foreground">添付ファイル:</p>
                                        <ul className="list-disc list-inside">
                                            {post.attachments.map((attachment, index) => (
                                                <li key={index}>{attachment}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </CardContent>
                            <CardFooter className="justify-between">
                                <div className="flex items-center space-x-4">
                                    <Button variant="ghost" size="sm">
                                        <MessageCircle className="mr-2 h-4 w-4" />
                                        {/* 返信数やコメント数を追加する場合 */}
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                        <ThumbsUp className="mr-2 h-4 w-4" />
                                        {/* いいね数やビュー数など */}
                                    </Button>
                                </div>
                                <Button variant="ghost" size="sm">
                                    <Share2 className="mr-2 h-4 w-4" />
                                    Share
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default MyPage;

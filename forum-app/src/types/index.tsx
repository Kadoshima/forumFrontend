// types.ts

export interface Course {
    id: number;
    departmentId: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export interface Department {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export interface Forum {
    id: number;
    title: string;
    description: string;
    createdBy: number;
    status: number;
    visibility: number;
    category: string;
    numPosts: number;
    moderators: number[];
    createdAt: string;
    updatedAt: string;
}

export interface Post {
    id: number;
    forumId: number;
    userId: number;
    content: string;
    tags: string;
    status: number;
    parentId: number | null;
    attachments: string[];
    createdAt: string;
    updatedAt: string;
}

export interface Report {
    id: number;
    reportedById: number;
    forumId: number;
    postId: number;
    reason: string;
    reportedAt: string;
    createdAt: string;
    updatedAt: string;
}

export interface SupportRequest {
    id: number;
    forumId: number;
    postId: number;
    requestContent: string;
    isResolved: boolean;
    isInProgress: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface User {
    id: number;
    studentId: string;
    nickname: string;
    email: string;
    departmentId: number;
    courseId: number;
    createdAt: string;
    updatedAt: string;
}

// パスワード変更や新規ユーザー登録時に使用する型
export interface UserCredentials {
    password: string;
}

export interface Topic {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    subreddit: string;
}

export interface Community {
    name: string;
    members: number;
    href: string;
}
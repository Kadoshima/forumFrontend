"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PostResponse } from "@/types/PostTypes";
import PostList from "@/components/post/PostList";

export default function Post() {
  const [data, setData] = useState<PostResponse[]>([]);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      const response = await fetch(`/api/post/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Http error. status : ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, [id]);
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Forum Posts</h1>
      <PostList posts={data} />
    </div>
  );
}

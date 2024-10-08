"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PostResponse } from "@/types/PostTypes";
import PostList from "@/components/post/PostList";
import CreatePost from "@/components/post/CreatePost";
import { Fab, Popover } from "@mui/material";
import AddCommentIcon from "@mui/icons-material/AddComment";

export default function Post() {
  const [data, setData] = useState<PostResponse[]>([]);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const params = useParams();
  const { id } = params;

  const fetchPosts = async () => {
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

  const handlePostCreated = () => {
    fetchPosts();
    setShowCreatePost(false);
  };

  useEffect(() => {
    handlePostCreated();
  }, [handlePostCreated]);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Forum Posts</h1>
      <PostList posts={data} />

      <Fab
        color="primary"
        aria-label="add comment"
        style={{ position: "fixed", bottom: 16, right: 16 }}
        onClick={handleClick}>
        <AddCommentIcon />
      </Fab>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}>
        <div className="p-4 w-80">
          <CreatePost forumId={Number(id)} onPostCreated={handlePostCreated} />
        </div>
      </Popover>
    </div>
  );
}

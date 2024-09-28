import React, { useState } from "react";

interface CreatePostProps {
  forumId: number;
  onPostCreated: () => void;
}

export default function CreatePost({
  forumId,
  onPostCreated,
}: CreatePostProps) {
  const [parentId, setParentId] = useState(null);
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`/api/post/${forumId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          content: content,
          parent_id: parentId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      setContent("");
      onPostCreated();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 rounded-lg p-4 shadow-md">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full p-2 mb-4 bg-gray-700 text-white rounded-md resize-none"
        rows={4}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Post
      </button>
    </form>
  );
}

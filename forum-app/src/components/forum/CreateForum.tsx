"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  SelectChangeEvent,
} from "@mui/material";
import { useRouter } from "next/navigation";
import FileUpload from "@/components/imageUpload/FileUpload";

interface ForumData {
  Title: string;
  Description: string;
  Visibility: number;
  Category: string;
  Attachment: File | null;
  Moderators: number | null;
}

const CreateForumForm: React.FC = () => {
  const [forumData, setForumData] = useState<ForumData>({
    Title: "",
    Description: "",
    Visibility: 0,
    Category: "",
    Attachment: null as File | null,
    Moderators: null,
  });
  const [error, setError] = useState<string | null>(null);

  const route = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForumData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (file: File | null) => {
    setForumData((prev) => ({ ...prev, Attachment: file }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("/api/forum", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(forumData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create forum");
      }

      const data = await response.json();
      route.push("/home?forumCreated=true");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 500, mx: "auto", mt: 8 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Create New Forum
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="タイトル"
          name="Title"
          value={forumData.Title}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="説明"
          name="Description"
          value={forumData.Description}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={4}
          required
        />
        <TextField
          fullWidth
          label="分類"
          name="Category"
          value={forumData.Category}
          onChange={handleChange}
          margin="normal"
          required
        />
        {/* <TextField
          fullWidth
          label="Attachment URL"
          name="Attachment"
          value={forumData.Attachment}
          onChange={handleChange}
          margin="normal"
        /> */}
        <FileUpload onFileChange={handleFileChange} />
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
        <Box sx={{ mt: 3 }}>
          <Button type="submit" variant="contained" color="primary">
            Create Forum
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default CreateForumForm;

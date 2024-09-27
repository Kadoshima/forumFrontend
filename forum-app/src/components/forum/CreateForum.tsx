"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Typography,
  Box,
  SelectChangeEvent,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface ForumData {
  Title: string;
  Description: string;
  Visibility: number;
  Category: string;
  Attachment: string | null;
  Moderators: number | null;
}

const CreateForumForm: React.FC = () => {
  const [forumData, setForumData] = useState<ForumData>({
    Title: "",
    Description: "",
    Visibility: 0,
    Category: "",
    Attachment: null,
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

  const handleSelectChange = (e: SelectChangeEvent<number>) => {
    const { name, value } = e.target;
    setForumData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
    <Paper elevation={3} sx={{ p: 4, maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Create New Forum
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          name="Title"
          value={forumData.Title}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Description"
          name="Description"
          value={forumData.Description}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={4}
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Visibility</InputLabel>
          <Select
            name="Visibility"
            value={forumData.Visibility}
            onChange={handleSelectChange}
            required>
            <MenuItem value={0}>Public</MenuItem>
            <MenuItem value={1}>Private</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Category"
          name="Category"
          value={forumData.Category}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Attachment URL"
          name="Attachment"
          value={forumData.Attachment}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Moderators"
          name="Moderators"
          type="number"
          value={forumData.Moderators}
          onChange={handleChange}
          margin="normal"
          InputProps={{ inputProps: { min: 0 } }}
        />
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

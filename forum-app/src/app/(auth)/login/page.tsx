"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { teal } from "@mui/material/colors";

export default function LoginForm() {
  const [studentId, setStudentId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // クライアントサイドでのバリデーション
    if (!studentId.trim() || !password.trim()) {
      setError("学籍番号とパスワードを入力してください。");
      return;
    }

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ student_id: studentId, password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        router.push("/home");
      } else {
        setError(data.error || "ログインに失敗しました。");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("通信中にエラーが発生しました。再度お試しください。");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
      }}>
      <Paper
        elevation={6}
        sx={{
          width: "50%",
          height: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          overflow: "auto",
        }}>
        <Avatar sx={{ m: 1, bgcolor: teal[400] }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ログイン - ChubuForum
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 1, width: "100%", maxWidth: "400px" }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="studentId"
            label="学籍番号"
            name="studentId"
            autoComplete="username"
            autoFocus
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            error={!!error}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error}
          />
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            ログイン
          </Button>
          <Box textAlign="center">
            <Link href="#" variant="body2">
              アカウントを作成
            </Link>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

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
  MenuItem,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { teal } from "@mui/material/colors";

const departments = [
  { id: 1, name: "情報工学科" },
  { id: 2, name: "電気電子工学科" },
];

const courses = [
  { id: 1, name: "Aコース" },
  { id: 2, name: "Bコース" },
];

export default function SignupForm() {
  const [studentId, setStudentId] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [departmentId, setDepartmentId] = useState<string>("");
  const [courseId, setCourseId] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // バリデーション
    if (
      !studentId ||
      !nickname ||
      !email ||
      !password ||
      !departmentId ||
      !courseId
    ) {
      setError("すべての項目を入力してください。");
      return;
    }

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          StudentID: studentId,
          Nickname: nickname,
          Email: email,
          Password: password,
          DepartmentID: +departmentId,
          CourseID: +courseId,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem("student_id", studentId);
        router.push("/login");
      } else {
        setError(data.error || "サインアップに失敗しました。");
      }
    } catch (error) {
      console.error("Signup error:", error);
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
          minHeight: "60%",
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
          新規登録 - ChubuForum
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
            id="nickname"
            label="ニックネーム"
            name="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            error={!!error}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="メールアドレス"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            select
            id="department"
            label="学科"
            name="department"
            value={departmentId}
            onChange={(e) => setDepartmentId(e.target.value)}
            error={!!error}>
            {departments.map((dept) => (
              <MenuItem key={dept.id} value={dept.id}>
                {dept.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            select
            id="course"
            label="コース"
            name="course"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            error={!!error}>
            {courses.map((course) => (
              <MenuItem key={course.id} value={course.id}>
                {course.name}
              </MenuItem>
            ))}
          </TextField>
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
            新規登録
          </Button>
          <Box textAlign="center">
            <Link href="/login" variant="body2">
              すでにアカウントをお持ちの方はこちら
            </Link>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

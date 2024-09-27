"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/app/(main)/Layout";
import SupportRequest from "@/components/support/SupportRequest";
import ForumList from "@/components/forum/ForumList";
import ForumType from "@/types/ForumTypes";
import { Snackbar, Alert, Fab, Tooltip } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { useSearchParams } from "next/navigation";
import SupportRequestType from "@/types/SupportTypes";

export default function Home(): JSX.Element {
  const [data, setData] = useState<ForumType[]>([]);
  const searchParams = useSearchParams();
  const [forumSuccessFlag, setForumSuccessFlag] = useState(false);
  const router = useRouter();

  const sampleSupportRequests: SupportRequestType[] = [
    {
      id: 1,
      forum_id: 3,
      post_id: 15,
      request_content:
        "物理学専攻ですが、生物学的な視点から重力が生態系に与える影響について意見をいただきたいです。",
      is_resolved: false,
      is_in_progress: true,
      created_at: "2023-05-15T10:30:00Z",
      updated_at: "2023-05-15T14:45:00Z",
    },
    {
      id: 2,
      forum_id: 5,
      post_id: 28,
      request_content:
        "コンピュータサイエンス専攻です。心理学の観点から、AIと人間の感情認識の違いについて教えていただけませんか？",
      is_resolved: true,
      is_in_progress: false,
      created_at: "2023-05-14T09:15:00Z",
      updated_at: "2023-05-16T11:20:00Z",
    },
    {
      id: 3,
      forum_id: 2,
      post_id: 7,
      request_content:
        "経済学部の方に質問です。環境工学の新技術が市場に与える影響について、経済モデルの観点からアドバイスをいただけますか？",
      is_resolved: false,
      is_in_progress: false,
      created_at: "2023-05-16T16:00:00Z",
      updated_at: "2023-05-16T16:00:00Z",
    },
    {
      id: 4,
      forum_id: 8,
      post_id: 42,
      request_content:
        "文学部の学生ですが、最新の言語処理AIについて情報工学の方に教えていただきたいです。小説創作に活用できるでしょうか？",
      is_resolved: true,
      is_in_progress: false,
      created_at: "2023-05-13T13:45:00Z",
      updated_at: "2023-05-15T09:30:00Z",
    },
    {
      id: 5,
      forum_id: 1,
      post_id: 3,
      request_content:
        "医学部の方に質問です。運動生理学の研究をしていますが、長期的な運動が脳の可塑性に与える影響について、最新の知見を教えていただけませんか？",
      is_resolved: false,
      is_in_progress: true,
      created_at: "2023-05-17T11:20:00Z",
      updated_at: "2023-05-17T14:10:00Z",
    },
    {
      id: 6,
      forum_id: 6,
      post_id: 33,
      request_content:
        "法学部の学生です。AIや自動運転車の事故責任について、工学的な観点から見た課題点を教えていただきたいです。",
      is_resolved: false,
      is_in_progress: false,
      created_at: "2023-05-18T10:05:00Z",
      updated_at: "2023-05-18T10:05:00Z",
    },
  ];
  useEffect(() => {
    const forumCreated = searchParams.get("forumCreated");
    if (forumCreated === "true") {
      setForumSuccessFlag(true);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token not found");
        return;
      }

      const response = await fetch("/api/forum", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data: ForumType[] = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  const handleCloseMessage = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setForumSuccessFlag(false);
  };

  const handleCreateForum = () => {
    router.push("/forum/create");
  };

  return (
    <Layout>
      <Snackbar
        open={forumSuccessFlag}
        autoHideDuration={6000}
        onClose={handleCloseMessage}>
        <Alert
          onClose={handleCloseMessage}
          severity="success"
          sx={{ width: "100%" }}>
          フォーラムの作成に成功しました！
        </Alert>
      </Snackbar>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">サポートリクエスト</h2>
        <div className="w-full overflow-x-auto">
          <SupportRequest supportRequests={sampleSupportRequests} />
        </div>
      </div>

      <div className="w-full">
        <ForumList posts={data!} />
      </div>

      <Tooltip title="フォーラムを作成" placement="left">
        <Fab
          color="primary"
          aria-label="add"
          onClick={handleCreateForum}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 1000,
          }}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </Layout>
  );
}

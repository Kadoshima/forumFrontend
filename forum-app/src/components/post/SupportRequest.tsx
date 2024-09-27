import React from "react";
import { Card } from "@/components/common/card";
import SupportRequestType from "@/types/SupportTypes";

interface SupportRequestProps {
  supportRequests: SupportRequestType[];
}

export default function SupportRequest({
  supportRequests,
}: SupportRequestProps) {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {supportRequests.map((request) => (
        <Card key={request.id} className="relative overflow-hidden p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold">ID: {request.id}</span>
            <span className="text-sm">
              Forum ID: {request.forum_id} | Post ID: {request.post_id}
            </span>
          </div>
          <h3 className="text-lg font-bold mb-2 truncate">
            {request.request_content}
          </h3>
          <div className="flex space-x-2 mb-2">
            <span
              className={`px-2 py-1 rounded-full text-xs ${
                request.is_resolved
                  ? "bg-green-200 text-green-800"
                  : "bg-red-200 text-red-800"
              }`}>
              {request.is_resolved ? "解決済み" : "未解決"}
            </span>
            <span
              className={`px-2 py-1 rounded-full text-xs ${
                request.is_in_progress
                  ? "bg-blue-200 text-blue-800"
                  : "bg-gray-200 text-gray-800"
              }`}>
              {request.is_in_progress ? "進行中" : "未着手"}
            </span>
          </div>
          <div className="text-xs text-gray-500">
            <p>作成日: {request.created_at}</p>
            <p>更新日: {request.updated_at}</p>
          </div>
        </Card>
      ))}
    </section>
  );
}

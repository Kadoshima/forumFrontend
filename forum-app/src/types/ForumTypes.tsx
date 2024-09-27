export interface ForumRequest {
  Title: string;
  Description: string;
  Visibility: number;
  Category: string;
  Attachment: string;
  Moderators: null;
}

export interface ForumResponse {
  ID: number;
  Title: string;
  Description: string;
  CreatedBy: number;
  Status: number;
  Visibility: number;
  Category: string;
  NumPosts: number;
  Attachments: string;
  Moderators: null;
  CreatedAt: string;
  UpdatedAt: string;
}

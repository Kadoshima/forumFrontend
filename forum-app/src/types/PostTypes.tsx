export interface PostResponse {
  ID: number;
  ForumId: number;
  UserId: number;
  Content: string;
  Status: number;
  ParentId: number;
  Attachment: null | string;
  CreatedAt: string;
  UpdatedAt: string;
}

export interface PostRequest {
  content: string;
  parent_id: null | number;
}

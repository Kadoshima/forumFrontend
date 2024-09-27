export default interface ForumType {
  ID: number;
  Title: string;
  Description: string;
  CreatedBy: number;
  Status: number;
  Visibility: number;
  Category: string;
  NumPosts: number;
  Attachments: string | null;
  Moderators: number | null;
  CreatedAt: string;
  UpdatedAt: string;
}

export default interface ForumDataType {
  Title: string;
  Description: string;
  Visibility: number;
  Category: string;
  Attachment: string | null;
  Moderators: number | null;
}

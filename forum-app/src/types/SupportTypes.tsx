export default interface SupportRequestType {
  id: number;
  forum_id: number;
  post_id: number;
  request_content: string;
  is_resolved: boolean;
  is_in_progress: boolean;
  created_at: string;
  updated_at: string;
}

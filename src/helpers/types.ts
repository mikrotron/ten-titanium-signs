export interface CommentType {
  name: string;
  message: string;
  created?: string;
  id?: string;
  [key: string]: string | undefined;
}

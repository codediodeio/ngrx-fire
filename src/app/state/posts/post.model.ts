export interface Post {
  pushKey: string;
  loading: boolean;
  text: string;
  votes: number;
  error?: string;
}

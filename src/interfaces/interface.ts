
export interface Post {
  postId: string;
  content: string;
  postEmoji: string;
  createdAt: string;
  updatedAt: string | null;
  author: {
    name: string;
    image: string;
  },
  totalComments: number;
}

export type GenericParams = Record<string, string | number>
export interface LoggedInUser {
  name: string;
  email: string;
}
import { useEffect, useState } from 'react';
import AddPost from './components/AddPost';
import PostItem from './components/PostItem';
import { Post } from '../../interfaces/interface';
import { getPosts } from './services/request';
import { useAuth } from '../../hooks/useAuth';

export default function FeedModule() {
  const [posts, setPosts] = useState<Post[]>([])
  const {user} = useAuth()
  useEffect(() => {
    setPosts(getPosts())
  }, [])

  return (
    <div>
      <h1 className="text-[28px] text-gray-100 font-medium mb-3">Hello {user?.name}</h1>
      <p className="text-gray-300 text-base mb-10 max-w-xl">
        How are you doing today? Would you like to share something with the community 🤗
      </p>
      <AddPost />
      {posts.map((post) => <PostItem key={post.postId} {...post} />)}
    </div>
  );
};
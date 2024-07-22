import { useState } from 'react';
import Button from '../../../components/Button/Button';
import { useAuth } from '../../../hooks/useAuth';

export default function AddPost() {
  const [post, setPost] = useState('');
  const { handleAuthCheck } = useAuth()
  function addPost() {
    if (handleAuthCheck()) {
      // api call to add a post
    }
  }
  return (
    <div className="bg-gray-800 px-5 py-6 rounded-lg mb-4 border-2 border-gray-500">
      <h2 className="text-lg text-gray-100 font-medium mb-4">Create post</h2>
      <div className="flex items-center bg-black-600 rounded-lg p-4">
        <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 text-lg mr-4">💬</div>
        <input
          type="text"
          placeholder="How are you feeling today?"
          className="bg-transparent text-gray-300 w-full outline-none"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
      </div>
      <div className="flex justify-end mt-4">
        <Button onClick={addPost}>
          Post
        </Button>
      </div>
    </div>
  );
};

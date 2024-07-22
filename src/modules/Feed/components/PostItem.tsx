import dayjs from 'dayjs';
import { Post } from '../../../interfaces/interface';
import CommentIcon from "../../../assets/svgs/comment.svg";
import HDots from "../../../assets/svgs/h-dots.svg";
import { loadComments } from '../services/request';
import { Link } from 'react-router-dom';

export default function PostItem(props: Post) {
  const { postId, content, postEmoji, createdAt, updatedAt, author: { name, image }, totalComments } = props
  function getComments(postId: string) {
    loadComments(postId)
  }
  return (
    <div className="bg-gray-800 py-6 px-5 rounded-lg border-2 border-gray-500 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="#"><img src={image} className="w-11 h-11 hover:scale-105 duration-300 bg-gray-600 rounded-full mr-4" /></Link>
          <div>
            <Link to="#"><h3 className="text-gray-100 font-medium hover:text-blue-500 duration-500">{name}</h3></Link>
            <p className="text-gray-300 text-sm font-medium">{dayjs(createdAt).fromNow()} {updatedAt ? " • Edited" : ''}</p>
          </div>
        </div>
        <img className='cursor-pointer p-2 rounded-md border-2 border-transparent hover:border-gray-700' src={HDots} />
      </div>
      <div className="bg-black-600 p-4 mt-5 rounded-lg">
        <div className="flex">
          <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full text-lg bg-gray-800 mr-4 animate-emoji overflow-hidden"><span className='emoji-icon'>{postEmoji}</span></div>
          <p className="text-gray-300">{content}</p>
        </div>
      </div>
      {totalComments && totalComments > 0 ? <div onClick={() => getComments(postId)} className="text-gray-400 mt-3.5 cursor-pointer">
        <span className='flex gap-2 font-medium hover:text-blue-500 duration-500'><img src={CommentIcon} /> {totalComments} comments</span>
      </div> : null}
    </div>
  );
};
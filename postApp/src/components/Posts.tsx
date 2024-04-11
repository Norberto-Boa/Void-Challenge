import { Post } from './Post';
import { useEffect } from "react";
import { fetchPosts } from "../features/PostSlice";
import { useAppSelector, useAppDispatch } from '../hooks';
// import { apiPost } from '../services/postsApi';
import { PostDTO } from '../@types/Post';

const Posts = () => {
  const posts: PostDTO[] = useAppSelector(state => state.posts.posts);
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(fetchPosts());
  }), [];

  return (
    <div>
      {posts.map(post => <Post likes={post.Likes} id={post.id} caption={post.caption} name={post.author.name} />)}
    </div>
  )
}

export default Posts
import { useEffect, useState } from "react"
import { apiPost } from "../services/postsApi";
import { Post, PostProps } from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    apiPost({
      method: "get"
    }).then(res => setPosts(res.data)).catch(console.log);
  })

  return (
    <div>
      {posts.map(post => <Post id={post.id} body={post.body} title={post.title} userId={post.userId} />)}
    </div>
  )
}

export default Posts
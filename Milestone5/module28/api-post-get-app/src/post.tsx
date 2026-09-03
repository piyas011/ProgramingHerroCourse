import { use } from "react";
import PostCart from "./postCart";

export default function Posts({ userPostPromise }) {
  const posts = use(userPostPromise);
  console.log(posts);

  return (
    <div>
      <h2>Post</h2>
      {posts.map((post) => (
        <PostCart post={post}></PostCart>
      ))}
    </div>
  );
}

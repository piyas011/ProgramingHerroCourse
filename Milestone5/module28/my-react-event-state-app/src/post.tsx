import { use } from "react";
import PostCart from "./postCart";

export default function UserPost({ userPostPromise }) {
  const post = use(userPostPromise);
  console.log(post);

  return (
    <div>
      <small>----------------------------------------</small>
      <h1>User Post Loading...</h1>
      <h4>Total Post : </h4>
      <small>-----------------------------------------</small>
      {post.map((post) => (
        <PostCart post={post}></PostCart>
      ))}
    </div>
  );
}

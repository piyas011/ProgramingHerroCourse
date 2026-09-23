import React from "react";
import PostsCard from "../components/postsCard";

const PostPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="grid grid-cols-4 gap-4">
      {posts.map((post) => (
        <PostsCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostPage;

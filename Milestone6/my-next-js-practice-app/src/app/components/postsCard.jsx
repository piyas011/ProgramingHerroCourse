import React from "react";

const PostsCard = ({ post }) => {
  return (
    <div className="bg-blue-300 p-2">
      <p>Id : {post.id}</p>
      <p>Title : {post.title}</p>
      <p>Body : {post.body}</p>
    </div>
  );
};

export default PostsCard;

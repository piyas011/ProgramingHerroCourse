import React from "react";

const BlogPostCart = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="bg-black text-white p-2 rounded-2xl">
      <p>{id}</p>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};

export default BlogPostCart;

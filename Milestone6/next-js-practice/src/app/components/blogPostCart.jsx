import Link from "next/link";
import React from "react";

const BlogPostCart = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="bg-black text-white m-2 p-2 rounded-2xl">
      <p>{id}</p>
      <p>{title}</p>
      <p>{body}</p>

      <button className="m-2">
        <Link className="bg-blue-500 p-2 rounded-sm" href={`blogs/${id}`}>
          View details
        </Link>
      </button>
    </div>
  );
};

export default BlogPostCart;

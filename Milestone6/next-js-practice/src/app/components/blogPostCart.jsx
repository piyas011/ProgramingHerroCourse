import Link from "next/link";
import React from "react";

const BlogPostCart = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="bg-black text-white m-2 p-2 rounded-2xl">
      <p>{id}</p>
      <p>{title}</p>
      <p>{body}</p>

      <div className="p-5">
        <Link className="bg-blue-500 p-2 rounded-2xl" href={`blogs/${id}`}>
          View details
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCart;

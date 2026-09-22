import React from "react";
import BlogPostCart from "../components/blogPostCart";

const BlogsPostPromise = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

const BlogsPage = async () => {
  const blogs = await BlogsPostPromise();

  return (
    <div className="bg-amber-100">
      <h1 className="text-5xl">Blog : {blogs.length}</h1>
      <div className="grid grid-cols-3 gap-5 p-3">
        {blogs.map((post) => (
          <BlogPostCart key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;

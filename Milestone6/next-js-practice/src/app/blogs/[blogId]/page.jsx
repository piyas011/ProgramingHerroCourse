import React from "react";

const BlogsPostPromise = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

const BlogsDetailsPage = async ({ params }) => {
  const { blogId } = await params;
  const posts = await BlogsPostPromise();
  const post = posts.find((post) => post.id === parseInt(blogId));
  console.log(post);

  return (
    <div>
      <h1>Blogs Details Page : {blogId}</h1>
      {post && (
        <div>
          <p>User Id : {post.userId}</p>
          <p>Title : {post.title}</p>
          <p>Body : {post.body}</p>
        </div>
      )}
    </div>
  );
};

export default BlogsDetailsPage;

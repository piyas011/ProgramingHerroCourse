import React from "react";

const BlogsPost = ({ blog }) => {
  const { title, description, author } = blog;
  //   console.log(blog);
  return (
    <div className="card border bg-base-250 ">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <strong>{author}</strong>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BlogsPost;

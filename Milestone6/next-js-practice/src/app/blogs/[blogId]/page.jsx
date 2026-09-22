import React from "react";

const BlogsDetailsPage = async ({ params }) => {
  const { blogId } = await params;
  return (
    <div>
      <h1>Blogs Details Page</h1>
    </div>
  );
};

export default BlogsDetailsPage;

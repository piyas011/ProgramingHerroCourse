import React from "react";

const PostDetailsPage = async({params}) => {
 
    const {PostId} = await params

  return (
    <div>
      <h2>Post Details</h2>
    </div>
  );
};

export default PostDetailsPage;

import React from "react";

const PostLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-9">{children}</div>
      <div className="col-span-3 ">
        <div className="bg-amber-200 fixed w-full">
          <p>fdfdfdfdffdfdffdf</p>
          <p>fdfdfdfdffdfdffdf</p>
          <p>fdfdfdfdffdfdffdf</p>
          <p>fdfdfdfdffdfdffdf</p>
          <p>fdfdfdfdffdfdffdf</p>
          <p>fdfdfdfdffdfdffdf</p>
          <p>fdfdfdfdffdfdffdf</p>
          <p>fdfdfdfdffdfdffdf</p>
          <p>fdfdfdfdffdfdffdf</p>
          <p>fdfdfdfdffdfdffdf</p>
          <p>fdfdfdfdffdfdffdf</p>
          <p>fdfdfdfdffdfdffdf</p>
          <p>fdfdfdfdffdfdffdf</p>
        </div>
      </div>
    </div>
  );
};

export default PostLayout;

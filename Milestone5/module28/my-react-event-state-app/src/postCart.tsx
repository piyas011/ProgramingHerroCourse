import "./userCart.css";

export default function PostCart({ post }) {
  return (
    <div className="user">
      <p>id : {post.id}</p>
      <p>Title : {post.title}</p>
      <p>Post Body : {post.body}</p>
    </div>
  );
}

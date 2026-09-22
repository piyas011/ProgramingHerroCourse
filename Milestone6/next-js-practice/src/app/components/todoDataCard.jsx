import Link from "next/link";

const TodoDataCard = ({ todo }) => {
  return (
    <div className="bg-amber-200 rounded-2xl p-5">
      <h1>Todo data card:</h1>
      <p>ID : {todo.id}</p>
      <p>Title : {todo.title}</p>
      <p>{todo.completed ? "completed" : "InCompleted"}</p>
      <Link href={`todos/${todo.id}`}>
        <button className="p-2 bg-blue-500 text-white rounded-md mt-2">
          Show Details
        </button>
      </Link>
    </div>
  );
};

export default TodoDataCard;

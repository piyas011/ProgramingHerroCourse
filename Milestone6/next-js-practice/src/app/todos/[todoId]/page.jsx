const TodosDetailsPag = async ({ params }) => {
  const { todoId } = await params;
  console.log(todoId);

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
  );
  const todo = await res.json();

  return (
    <div className=" border p-2 mb-3">
      <h1 className="text-3xl p-2">Todo Details Pages id No : {todo.id}</h1>
      <p>Title : {todo.title}</p>
      <p>{todo.completed ? "completed : True" : "completed : false"}</p>
    </div>
  );
};

export default TodosDetailsPag;

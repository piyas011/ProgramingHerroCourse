import TodoDataCard from "../components/todoDataCard";

const todosDataPromise = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json();
};

const TodosPages = async () => {
  const todos = await todosDataPromise();

  return (
    <div>
      <h1 className="text-5xl">Todos Pages : {todos.length}</h1>
      <div className="grid grid-cols-3 gap-4">
        {todos.map((todo) => (
          <TodoDataCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodosPages;

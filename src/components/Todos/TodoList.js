import Todo from "./Todo";
export default function TodoList({ todos, deleteTodo }) {
  {
    if (!todos.length) {
      return <p className="center">No todos</p>;
    }
  }
  return todos.map((todo, index) => {
    return (
      <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
    );
  });
}

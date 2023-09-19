import style from "./TodoList.module.css";
import Todo from "./Todo";

export default function TodoList({ todos, deleteTodo, toggleTodo }) {
  {
    if (!todos.length) {
      return <p className={style.NoTodo}>No todos</p>;
    }
  }
  return todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        todo={todo}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    );
  });
}

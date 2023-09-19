import { useState } from "react";

import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
function App() {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Todo App version ONE</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;

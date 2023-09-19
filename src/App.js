import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";
function App() {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (text) => {
    const newTodo = {
      text: text,
      isComplited: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isComplited: !todo.isComplited }
          : { ...todo };
      })
    );
  };

  const resetTodoHandler = () => {
    setTodos([]);
  };

  const deleteComplitedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isComplited));
  };

  const completedTodosCount = todos.filter((todo) => todo.isComplited).length;
  return (
    <div className="App">
      <h1>Todo App version TWO</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      {!!todos.length && (
        <TodosActions
          completedTodoExist={!!completedTodosCount}
          resetTodos={resetTodoHandler}
          deleteComplitedTodos={deleteComplitedTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have ${completedTodosCount} completed ${
          completedTodosCount > 1 ? "todos" : "todo"
        }`}</h2>
      )}
    </div>
  );
}

export default App;

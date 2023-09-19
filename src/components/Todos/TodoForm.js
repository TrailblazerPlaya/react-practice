import { RiCornerDownLeftLine } from "react-icons/ri";
import style from "./TodoForm.module.css";
import React, { useState } from "react";
import Button from "../UserInterface/Button";
export default function TodoForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(newTodo);
    setNewTodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newTodo}
        className={style.todoInput}
        placeholder="Add Todo"
        type="text"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button className={style.todoButton} type="submit">
        <RiCornerDownLeftLine />
      </Button>
    </form>
  );
}

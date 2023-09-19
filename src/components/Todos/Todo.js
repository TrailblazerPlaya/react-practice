import { RiTodoFill } from "react-icons/ri";
import style from "./Todo.module.css";
export default function Todo({ todo, index, deleteTodo }) {
  return (
    <div className={style.todoContainer}>
      <RiTodoFill className={style.icon} />
      <div className={style.todoText} onDoubleClick={() => deleteTodo(index)}>
        {todo}
      </div>
    </div>
  );
}

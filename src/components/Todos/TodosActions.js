import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UserInterface/Button";
import style from "./TodosActions.module.css";
export default function TodosActions({
  resetTodos,
  deleteComplitedTodos,
  completedTodoExist,
}) {
  return (
    <div className={style.todosActionsContainer}>
      <Button title={"Refresh"} onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title={"Delete"}
        onClick={deleteComplitedTodos}
        disabled={!completedTodoExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

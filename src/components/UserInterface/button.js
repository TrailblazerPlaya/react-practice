import style from "./button.module.css";
export default function Button() {
  return (
    <>
      <button className={style.todoButton} type="submit">
        Submit
      </button>
    </>
  );
}

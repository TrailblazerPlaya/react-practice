import style from "./Button.module.css";
export default function Button(props) {
  const { children, disable = false } = props;
  return (
    <button {...props} disabled={disable} className={style.Button}>
      {children}
    </button>
  );
}

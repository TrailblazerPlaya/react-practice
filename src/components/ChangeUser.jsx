import UserContext from "../context/UserContext";
import { useContext } from "react";
export default function ChangeUser() {
  const { user, setUser } = useContext(UserContext);
  return (
    <button onClick={() => setUser(user === "Nikolay" ? "Bekker" : "Nikolay")}>
      Change User
    </button>
  );
}

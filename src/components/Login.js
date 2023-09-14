import { useState } from "react";
export default function Login() {
  const [data, setData] = useState({ username: "", password: "" });
  function handleFormSubmit(event) {
    event.preventDefault();

    console.log(data);
    alert(JSON.stringify(data));
  }
  function handleChange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => {
              handleChange(e, "username");
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => {
              handleChange(e, "password");
            }}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

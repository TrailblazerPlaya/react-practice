import UserContext from "../context/UserContext";
function UserInfo() {
  return (
    <UserContext.Consumer>{(user) => <div>{user}</div>}</UserContext.Consumer>
  );
}
export default UserInfo;

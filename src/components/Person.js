export default function Person(props) {
  const { firstName, lastName, email, image } = props;
  return (
    <div className="card">
      <img src={image} alt={"shshshsh"} />
      <h3>
        {firstName} {lastName}
      </h3>
      <h4>{email}</h4>
    </div>
  );
}

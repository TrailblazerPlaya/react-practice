import { persons } from "../data/dataPerson";
import Person from "./Person";

export default function PersonsMap() {
  return (
    <div className="cards">
      {persons.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
      ;
    </div>
  );
}

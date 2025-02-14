import { PeopleOrSpeciesCard } from "./features/PeopleOrSpeciesCard/PeopleOrSpeciesCard";

function Components() {
  return (
    <div className="components">
      <PeopleOrSpeciesCard id={3} type="people" />
      <PeopleOrSpeciesCard id={35} type="species" />
    </div>
  );
}

export { Components };

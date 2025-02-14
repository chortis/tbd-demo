import { FeatureCard } from "../../components/FeatureCard/FeatureCard";
import { useQuery } from "../../hooks/useQuery";

type StarWarsBase = {
  name: string;
  eye_color: string;
  created: string;
  url: string;
};

type StarWarsPeople = {
  birth_year: string;
};

type StarWarsSpecies = {
  average_lifespan: string;
};

type StarWars = StarWarsBase & (StarWarsPeople | StarWarsSpecies);

export const PeopleOrSpeciesCard = ({
  type,
  id,
}: {
  id: number;
  type: "people" | "species";
}) => {
  const { data, loading, error } = useQuery<StarWars>(id, type);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !data) {
    return <p>There was an error!</p>;
  }

  return (
    <FeatureCard
      title={data.name}
      description={data.eye_color}
      meta={data.created}
      onClick={() => {
        alert(data.url);
      }}
      buttonText={"Button"}
    />
  );
};

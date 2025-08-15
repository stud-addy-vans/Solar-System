import Planet from "../../components/Planet";
import { planets } from "./planetsData";
import Sun from "../../components/Sun";

const SolarSystem = ({ realistic }) => {
  const scale = realistic ? 1 : 0.5;

  return (
    <>
      <Sun />
      {planets.map((planet) => (
        <Planet
          key={planet.name}
          {...planet}
          radius={planet.radius * scale}
        />
      ))}
    </>
  );
};

export default SolarSystem;

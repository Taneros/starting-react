import React, { useContext } from "react";
import PokemonContext from "../pokemonContex";
import PokemonRow from "./PokemonRow";

const PokemonTable = () => {
  const { pokemon, filter, selectedItemSet } = useContext(PokemonContext);
  return (
    <table width="100%">
      <tbody>
        {pokemon
          .filter((pokemon) =>
            pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              pokemon={pokemon}
              key={[pokemon.id, pokemon.name.english].join(":")}
              onSelect={(pokemon) => selectedItemSet(pokemon)}
            ></PokemonRow>
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;

import React from "react";
import PokemonRow from "./PokemonRow";
import useStore from "../store";

const PokemonTable = () => {
  const pokemon = useStore((state) => state.pokemon);
  const filter = useStore((state) => state.filter);
  const setSelectedPokemon = useStore((state) => state.setSelectedPokemon);

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
              onSelect={(pokemon) => setSelectedPokemon(pokemon)}
            ></PokemonRow>
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;

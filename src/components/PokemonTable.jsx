import React from "react";
import PokemonRow from "./PokemonRow";
import PokemonContext from "../pokemonContext";

const PokemonTable = () => {
  const {
    state: { pokemon, filter },
    dispatch,
  } = React.useContext(PokemonContext);
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
              onSelect={(pokemon) =>
                dispatch({
                  type: "SET_SELECTED_POKEMON",
                  payload: pokemon,
                })
              }
            ></PokemonRow>
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;

import React from "react";
import PokemonRow from "./PokemonRow";
import { observer } from "mobx-react";
import store from "../store";

const PokemonTable = () => (
  <table width="100%">
    <tbody>
      {store.pokemon
        .filter((pokemon) =>
          pokemon.name.english
            .toLowerCase()
            .includes(store.filter.toLowerCase())
        )
        .slice(0, 20)
        .map((pokemon) => (
          <PokemonRow
            pokemon={pokemon}
            key={[pokemon.id, pokemon.name.english].join(":")}
            onClick={(pokemon) => store.setSelectedPokemon(pokemon)}
          />
        ))}
    </tbody>
  </table>
);

export default observer(PokemonTable);

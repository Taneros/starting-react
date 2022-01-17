import React from "react";
import useStore from "../store";
import { observer } from "mobx-react";
import store from "../store";

const PokemonInfo = () => {
  return store.selectedPokemon ? (
    <div>
      <h1>{store.selectedPokemon.name.english}</h1>
      <table>
        {Object.keys(store.selectedPokemon.base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{store.selectedPokemon.base[key]}</td>
          </tr>
        ))}
      </table>
    </div>
  ) : null;
};

export default observer(PokemonInfo);

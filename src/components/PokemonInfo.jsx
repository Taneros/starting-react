import React, { useContext } from "react";
import PokemonContext from "../pokemonContex";

const PokemonInfo = () => {
  const { selectedPokemon } = useContext(PokemonContext);
  return selectedPokemon ? (
    <div>
      <h1>{selectedPokemon.name.english}</h1>
      <table>
        {Object.keys(selectedPokemon.base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{selectedPokemon.base[key]}</td>
          </tr>
        ))}
      </table>
    </div>
  ) : null;
};

export default PokemonInfo;

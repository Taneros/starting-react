import React from "react";
import Button from "@mui/material/Button";
import PokemonType from "../pokemonType";

const PokemonRow = ({ pokemon, onSelect }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSelect(pokemon)}
      >
        Select
      </Button>
    </td>
  </tr>
);

export default PokemonRow;

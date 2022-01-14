import React, { useContext } from "react";
import styled from "@emotion/styled";
import PokemonContext from "../pokemonContex";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {
  const { filter, filterSet } = useContext(PokemonContext);
  return (
    <Input
      type="text"
      value={filter}
      onChange={(e) => filterSet(e.target.value)}
    />
  );
};

export default PokemonFilter;

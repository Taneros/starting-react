import React from "react";
import styled from "@emotion/styled";
import PokemonContext from "../pokemonContext";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {
  const {
    state: { filter },
    dispatch,
  } = React.useContext(PokemonContext);
  return (
    <Input
      type="text"
      value={filter}
      onChange={(e) =>
        dispatch({
          type: "SET_FILTER",
          payload: e.target.value,
        })
      }
    />
  );
};

export default PokemonFilter;

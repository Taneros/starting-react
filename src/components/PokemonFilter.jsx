import React from "react";
import styled from "@emotion/styled";
import store from "../store";
import { observer } from "mobx-react";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => (
  <Input
    type="text"
    value={store.filter}
    onChange={(e) => store.setFilter(e.target.value)}
  />
);

export default observer(PokemonFilter);

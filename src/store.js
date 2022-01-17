import create from "zustand";

const useStore = create((set) => ({
  pokemon: [],
  filter: "",
  selectedPokemon: null,
  bears: 0,
  setPokemon: (pokemon) =>
    set((state) => ({
      ...state,
      pokemon,
    })),
  setFilter: (filter) =>
    set((state) => ({
      ...state,
      filter,
    })),
  setselectedPokemon: (selectedPokemon) =>
    set((state) => ({
      ...state,
      selectedPokemon,
    })),
}));

fetch("http://localhost:3000/starting-react/pokemon.json")
  .then((resp) => resp.json())
  .then((pokemon) =>
    useStore.setState((state) => ({
      ...state,
      pokemon,
    }))
  );

export default useStore;

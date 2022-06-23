import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";


export const PokemonApp = () => {


  /* Getting the state from the redux store. */
  const dispatch = useDispatch();
  const { pokemons = [], isLoading, page } = useSelector(state => state.pokemons);

 /* A hook that is called when the component is mounted. */
  useEffect(() => {
    dispatch(getPokemons());
  },[]);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr/>

      <span>Loading: {isLoading ? "True" : "False"}</span>

      <ul>
        {
          pokemons.map(({ name }) => (
            <li key={name}>{name}</li>
          ))
        }
      </ul>

      <button
        disabled={ isLoading }
        onClick={() => dispatch(getPokemons(page))}
      >
        Load More
      </button>
    </>
  )
}

import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemos } from "./pokemonSlice";

/**
 * It dispatches an action to start loading the pokemons, then it fetches the pokemons from the API and
 * dispatches another action to set the pokemons in the store
 * @param [page=0] - The page number of the results to fetch.
 * @returns An object with a type and a payload.
 */
export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemos());

    //TODO: fetch the pokemons from the API
    const { data } = await pokemonApi.get(
      `pokemon?limit=10&offset=${page * 10}`
    );
    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
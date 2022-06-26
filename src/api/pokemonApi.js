/* This is creating a new instance of axios with a baseURL of https://pokeapi.co/api/v2/ */
import axios from "axios";

export const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

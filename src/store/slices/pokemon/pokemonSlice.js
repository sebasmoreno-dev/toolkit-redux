import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemos: (state, /* action */ ) => {
            state.isLoading = true;
        },
        /* A reducer function. It is a function that takes in the current state and an action and
        returns a new state. */
        setPokemons: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemos, setPokemons } = pokemonSlice.actions;
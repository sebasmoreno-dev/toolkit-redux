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
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
            state.isLoading = false;
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemos, setPokemons } = pokemonSlice.actions;
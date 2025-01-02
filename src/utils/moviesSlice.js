import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
          nowPlayingMovies : null,
          trailerVideo : null,
          popularMovies: null
        },
    reducers: {
        addnowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state,action)=>{
            state.popularMovies = action.payload;
        },
        addtrailervideo : (state,action)=>{
            state.trailerVideo = action.payload;
        }
    }   
});


export const { addnowPlayingMovies, addtrailervideo,addPopularMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
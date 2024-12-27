import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
          nowPlayingMovies : null,
          trailerVideo : null
        },
    reducers: {
        addnowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addtrailervideo : (state,action)=>{
            state.trailerVideo = action.payload;
        }
    }   
});


export const { addnowPlayingMovies, addtrailervideo } = moviesSlice.actions;
export default moviesSlice.reducer;
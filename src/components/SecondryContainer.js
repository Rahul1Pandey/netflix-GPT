import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
  const movies = useSelector(store=>store.movies)


  return (
    movies.nowPlayingMovies && (
    <div className=' bg-black'>
      <div className='-mt-52  z-20 relative'>
           <MovieList title = {"Now Playing"} movies={movies.nowPlayingMovies}/>
           <MovieList title = {"Trending"} movies={movies.nowPlayingMovies}/>
           <MovieList title = {"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
           <MovieList title = {"Popular"} movies={movies.popularMovies}/>
           <MovieList title = {"Horror"} movies={movies.nowPlayingMovies}/>
           {/* <MovieList title = {"Comedy"} movies={movies.nowPlayingMovies}/> */}
      </div>     
    </div>
    )
  );
}

export default SecondryContainer

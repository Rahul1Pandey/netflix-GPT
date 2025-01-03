import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    // console.log(movies)
    // if(!movies) return;

   return(
    <div className='px-6 '>
      <h1 className='text-3xl  py-3 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll '>
        <div className='flex'>
        {movies?.map((movie)=>(
           <MovieCard key={movie.id} posterpath={movie.backdrop_path} />
           ))}
        </div>
       
      </div>
    </div>
  )
}

export default MovieList


// {movies?.map((movie)=><MovieCard key={movie.id} posterpath={movie?.backdrop_path} />)}
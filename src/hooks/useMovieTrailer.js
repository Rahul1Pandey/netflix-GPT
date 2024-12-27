import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addtrailervideo } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constant';

const useMovieTrailer = ({movieId})=>{
   
    const dispatch = useDispatch()
    const getMovievideo = async()=>{
          const data = await fetch('https://api.themoviedb.org/3/movie/'
          + movieId +
          "/videos?language=en-US", API_OPTIONS)
          const json = await data.json()
        //   console.log(json)
  
  
          const filterData = json.results.filter((video)=>video.type==='Trailer')
          const trailer = filterData.length ? filterData[0] : json.results[0];
        //   console.log(trailer)
          dispatch(addtrailervideo(trailer))
    }
  
    useEffect(()=>{
      getMovievideo();
    },[])
}

export default useMovieTrailer;
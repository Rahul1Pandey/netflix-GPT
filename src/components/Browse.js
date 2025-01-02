import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import { useSelector } from 'react-redux'
import GptSearchPage from './GptSearchPage'


const Browse = () => {
   const showGptSearch = useSelector(store =>store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {
        showGptSearch ? (
          <GptSearchPage />
        ) : (
          <>
             <MainContainer />
             <SecondryContainer />
          </>
        )

      }
      
      
    </div>
  )
}

export default Browse

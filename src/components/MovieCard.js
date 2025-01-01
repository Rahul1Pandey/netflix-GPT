import React from 'react'
import { card_IMG_URL } from '../utils/constant'

const MovieCard = ({posterpath}) => {
  return (
    <div className='w-56 pr-5 ' >
           <img 
            src={card_IMG_URL + posterpath} alt="cardImg" />
    </div>
  )
}

export default MovieCard

import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-24  absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='w-1/4 text-base py-6'>{overview}</p>
        <div className='flex gap-5'>
        <button 
           className='bg-white text-black rounded-lg px-5 py-2 font-bold flex gap-3'>
            <img className='w-6'
          src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-play-icon-png-image_956416.jpg"  alt="play_btn"
            />Play
        </button>
        <button className='bg-gray-500 bg-opacity-50 rounded-lg px-5 py-2 font-bold '>
            More Info
        </button>
        </div>
    </div>
  )
}

export default VideoTitle

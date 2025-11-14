import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div className='my-4 md:m-0'>
        <button className='bg-white text-black rounded-lg py-1 md:py-4 px-3 md:px-12 text-xl cursor-pointer hover:bg-white/80'>⏵Play</button>
        <button className='hidden md:inline-block mx-2 bg-white text-black rounded-lg p-4 px-12 text-xl cursor-pointer hover:bg-white/80'>🛈 More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle

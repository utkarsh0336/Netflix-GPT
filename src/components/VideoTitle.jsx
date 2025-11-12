import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black rounded-lg p-4 px-12 text-xl cursor-pointer hover:bg-white/80'>⏵Play</button>
        <button className='mx-2 bg-white text-black rounded-lg p-4 px-12 text-xl cursor-pointer hover:bg-white/80'>🛈 More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle

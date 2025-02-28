import React, { useEffect } from 'react'

function Banner({gameBanner}) {

    useEffect(() => {
        
    },[])

      // ✅ Ensure gameBanner is not undefined before accessing its properties
  if (!gameBanner) {
    return (
      <div className="relative h-[100px] bg-gray-800 flex items-center justify-center rounded-xl">
        <h2 className="text-white text-2xl">Select a Game</h2>
      </div>
    );
  }

  return (
    <div className='relative'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full'>
            <h2 className='text-[24px] text-white font-bold'>{gameBanner.name}</h2>
            <button className='bg-blue-700 text-white py-1 px-5 rounded-lg'>Get Now</button>
        </div>
      <img src={gameBanner.background_image} className='md:h-[320px] w-full rounded-xl'/>
    </div>
  )
}

export default Banner;

import React, { useEffect } from 'react'

function TrendingGames({gameList}) {
    useEffect(() => {
        console.log(gameList)
    })
  return (
    <div className='mt-5 hidden md:block'>
        <div className='bg-blue-800 w-[250px] rounded-t-lg px-2'>

         <h2 className='font-bold text-[30px] text-white'>Trending Games</h2>
        </div>
        <div className='hidden md:grid md:grid-cols-3 gap-4 lg:grid-cols-4 mt-3'>
        {gameList.map((item, index) => index < 4 && (
            <div  key={item.id} className='bg-blue-900 rounded-xl group hover:scale-110 transition-all duration-300
             ease-in-out cursor-pointer'>
                <img src={item.background_image} className='h-[270px] rounded-t-lg object-cover'/>
                <h2 className='text-white text-[20px] font-bold p-3'>{item.name}</h2>
            </div>
        ))}
        </div>
    </div>
  )
}

export default TrendingGames

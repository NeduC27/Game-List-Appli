import React, { useEffect } from 'react'

function GamesByGenresId({gameList, selectedGenresName}) {

    useEffect(() => {
        console.log('gameList',gameList)
    },[])
  return (
    <div className='mt-5'>
        <div className='bg-blue-800 w-[250px] rounded-t-lg px-2'>

         <h2 className='font-bold text-[30px] text-white'>{selectedGenresName} Games</h2>

        </div>

      <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3'>
        {gameList.map((item) => (
            <div className='bg-blue-900  p-2 rounded-xl hover:scale-112 transition-all ease-in-out duration-300 cursor-pointer'>
                <img src={item.background_image} className='w-full h-[18% rounded-xl object-cover]'/>
                <h2 className='text-[20px] text-white font-bold'>{item.name}<span className='p-1 ml-2 rounded-sm text-[20px] font-medium]'>{item.metacritic}</span></h2>
                <h2 className='text-white'>⭐{item.rating}  💬{item.reviews_count}  🔥{item.suggestions_count}</h2>
            </div>
        ))}
        </div>
    </div>
  )
}

export default GamesByGenresId

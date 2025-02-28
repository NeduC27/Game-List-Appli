
import React, { useEffect, useState } from 'react'
import GlobalApi from '../assets/Services/GlobalApi';

function GenreList({genereId, selectedGenresName}) {

    const [genreList, setGenreList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        getGenreList()
    },[])
    const getGenreList = () => {
        GlobalApi.getGenreList.then((resp) => {

            setGenreList(resp.data.results)
        })
    }
  return (
    <div className='text-[20px] text-white p-3'>
      <h1>Genre</h1>
      {genreList.map((item, index) => (
        <div  key={item.id} onClick={() => {setActiveIndex(index);genereId(item.id);selectedGenresName(item.name)
           }} className={`flex gap-2 items-center cursor-pointer 
            hover:bg-gray-500 p-2 rounded-lg group ${activeIndex == index ? 'bg-gray-200 dark:bg-gray-600' : null}`}>
            <img src={item.image_background} className={`w-[40px] h-[40px] object-cover mt-4 
            group-hover:scale-105 transition-all ease-out duration-300 rounded-lg
            ${activeIndex == index ? 'scale-105' : null}`}/>
            <h3 className={`hover:text-black group-hover:font-bold transition-all ease-out duration-300
                ${activeIndex == index ? 'font-bold' : null}`}>{item.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default GenreList;

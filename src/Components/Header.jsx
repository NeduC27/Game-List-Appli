import React, { useContext, useEffect, useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { IoMoonSharp } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";
import { ThemeContext } from '../Context/ThemeContext';
import { RxHamburgerMenu } from "react-icons/rx";
import GenreList from './GenreList';
import Banner from './Banner';
import GlobalApi from '../assets/Services/GlobalApi';


function Header({setGenereId, selectedGenresName, getGameListByGenreId, setActiveIndex}) {

  const [toggle, setToggle] = useState(false);
  const {theme, setTheme} = useContext(ThemeContext);
  const [selectedGenre, setSelectedGenre] = useState(null);


  useEffect(() => {
    console.log('Theme',theme)
  },[])


   // ✅ Function to handle genre selection
   const handleGenreSelect = async (genreId, genreName) => {
    setToggle(false); // ✅ Close dropdown after selection


  try {
    // ✅ Fetch games based on selected genre
    const response = await GlobalApi.getGameListByGenreId(genreId);
    if (response.data.results.length > 0) {
      setSelectedGenre({
        id: genreId,
        name: genreName,
        background_image: response.data.results.background_image, // ✅ Use first game's image
      });


      // ✅ Update state in parent
      setGenereId(genreId);
      selectedGenresName(genreName);

      // ✅ Debugging window width
      console.log("Current Screen Width:", window.innerWidth);

             // ✅ Only update game list if on a smaller screen
             if (window.innerWidth < 768) {
              getGameListByGenreId(genreId);
          }
    }
  } catch (error) {
    console.error("Error fetching games:", error);
  }
};


  return (

    <>
      <div className='flex items-center space-x-3'>
        
          
        <div className='flex items-center space-x-3 w-full bg-gray-300 p-2 rounded-full'>
          <IoMdSearch className='text-[30px] text-gray-500'/>
          <input type="text" placeholder='Search Games' 
          className='outline-none'/>
        </div>

        <div>
          {theme == 'light' ? (<IoMoonSharp className='text-[35px] bg-slate-200 p-1 rounded-full cursor-pointer'
          onClick={() => {setTheme('dark');localStorage.setItem('theme', 'dark')}}/>)
          : 
          (<MdWbSunny className='text-[35px] bg-black p-1 rounded-full text-white cursor-pointer'
          onClick={() => {setTheme('light');localStorage.setItem('theme', 'light')}}/>)}
        </div>
        <div>
          <RxHamburgerMenu className='text-gray-200 font-bold text-2xl cursor-pointer md:hidden' onClick={() => 
            
            setToggle(!toggle)
            
          }/>

            {/* Dropdown GenreList */}
           {toggle && (
            <div className="absolute top-20 left-0 bg-blue-500 shadow-md p-3 rounded-lg w-50 z-10 text-sm">
              <GenreList onGenreSelect={handleGenreSelect} selectedGenresName={setSelectedGenre} setActiveIndex={setActiveIndex}/>
            </div> 
          )} 
        </div>  
      </div> 
          {/* Banner (Shows games based on selected genre) */}
          <Banner selectedGenre={selectedGenre} /> 
    </>
  )
}
 
export default Header;

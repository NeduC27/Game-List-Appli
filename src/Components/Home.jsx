import React, { useEffect, useState } from 'react'
import GenreList from './GenreList'
import GlobalApi from '../assets/Services/GlobalApi'
import Banner from './Banner';
import TrendingGames from './TrendingGames';
import GamesByGenresId from './GamesByGenresId';


function Home() {
    const [allGameList, setAllGameList] = useState();
    const [gameListByGenres, setGameListByGenres] = useState([])
    const [selectedGenresName, setSelectedGenresName] = useState('Action')

    useEffect(() => {
        getAllGamesList();
        getGameListByGenreId(4);
    },[])

    const getAllGamesList = () => {
        GlobalApi.getAllGames.then((resp) => {
            setAllGameList(resp.data.results)
           
        })
    }

    const getGameListByGenreId = (id) => {
        
        GlobalApi.getGameListByGenreId(id).then((resp) => {
            console.log('Game List By GeneralId:',resp.data.results)
            setGameListByGenres(resp.data.results)
        })
    }
  return (
    <div className='grid grid-cols-4 space-x-6 pt-6'>
      <div className='bg-blue-900 rounded-xl h-full hidden md:block'>
        <GenreList genereId={(genereId) => getGameListByGenreId(genereId)}
         selectedGenresName={(name) => setSelectedGenresName(name)}/>
      </div>
      <div className='col-span-4 md:col-span-3'>
        {allGameList ?.length > 0 && gameListByGenres.length > 0 ? 
        <div>
         <Banner gameBanner={allGameList[0]}/>
         <TrendingGames gameList={allGameList}/>
         <GamesByGenresId gameList={gameListByGenres}
         selectedGenresName={selectedGenresName}/>
        </div>
        : null}
       </div>
    </div>
  )
}

export default Home;

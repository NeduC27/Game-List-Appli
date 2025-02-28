import axios from 'axios'

const key = 'b253f61b98f14714b8e2ef9b264bc930';
const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
})

const getGenreList =  axiosCreate.get('/genres?key='+key)
const getAllGames =  axiosCreate.get('/games?key='+key)
const getGameListByGenreId = (id) => axiosCreate.get('/games?key='+key+'&genres='+id)

export default {
    getGenreList,
    getAllGames,
    getGameListByGenreId
};

// import {API_key, baseURL} from '../env.js'

const API_key = "1c411da369fa9eba74cbafab73e54e08" // for hiding the key, we will need a different proxy server to tmdb calls, so lets asssume this key is safe to be kept in browser
const baseURL= "https://api.themoviedb.org/3"

module.exports={
    async  fetchTheMovieData(page) {
        console.log("envs",API_key, baseURL,  process.env.TMDB_API_KEY)

        const res = await fetch(`${baseURL}/discover/movie?sort_by=popularity.desc&api_key=${API_key}&page=${page}`)
        const json = await res.json()
        return json
    } ,
    async  fetchTheSingleMovieData(id) {
        console.log("envs",API_key, baseURL)
        const res = await fetch(`${baseURL}/movie/${id}?api_key=${API_key}`)
        const json = await res.json()
        return json
    } ,
    async fetchSearchData(query, page) {
        console.log("envs",API_key, baseURL)
        const res = await fetch(`${baseURL}/search/movie?api_key=${API_key}&query=${query}&page=${page}`)
        const json = await res.json()
        return json
    }
}
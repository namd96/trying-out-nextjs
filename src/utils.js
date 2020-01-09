
import {API_key, baseURL} from '../env.js'
console.log(API_key, baseURL)
module.exports={
    async  fetchTheMovieData(page) {
        const res = await fetch(`${baseURL}/discover/movie?sort_by=popularity.desc&api_key=${API_key}&page=${page}`)
        const json = await res.json()
        return json
    } ,
    async  fetchTheSingleMovieData(id) {
        const res = await fetch(`${baseURL}/movie/${id}?api_key=${API_key}`)
        const json = await res.json()
        return json
    } ,
    async fetchSearchData(query, page) {
        const res = await fetch(`${baseURL}/search/movie?api_key=${API_key}&query=${query}&page=${page}`)
        const json = await res.json()
        return json
    }
}
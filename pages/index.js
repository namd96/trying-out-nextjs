import React from 'react'
import fetch from 'isomorphic-unfetch'
import { fetchTheMovieData, fetchSearchData } from '../src/utils';
import MovieComponent from '../src/components/movieComponent'
class MovieListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            moviesList: props.movies,
            searchInput: ""
        }
    }



    static async getInitialProps(ctx) {
        // const res = await fetch('http://www.omdbapi.com/?s=avenger&apikey=4563661c')
        let movies = await fetchTheMovieData(1)
        return { movies }
    }
    async goToPage(pageKey) {
        let movies =  this.state.searchInput ? await fetchSearchData(this.state.searchInput, pageKey) : await fetchTheMovieData(pageKey)
        this.setState({
            page: pageKey,
            moviesList: movies
        })
    }

    handleSearchInput(e) {
        this.setState({
            searchInput: e.target.value ? e.target.value : ""
        })
    }

  async  handleApplySearch() {
        let movies = this.state.searchInput ? await fetchSearchData(this.state.searchInput,1) :   await fetchTheMovieData(1)
        this.setState({
            page: 1,
            moviesList: movies,
            // searchInput : ""
        })
    }

    resetSearch(){
        this.setState({
            searchInput : ""
        },()=>{
            this.handleApplySearch()
        })
    }
    render() {
        return this.state.moviesList ? this.state.moviesList.results ? <div>
            <button onClick={this.resetSearch.bind(this)}>Discover Movies</button>
            <input onChange={this.handleSearchInput.bind(this)} placeholder="Search movies..." value={this.state.searchInput}></input>
            <button onClick={this.handleApplySearch.bind(this)}>Apply search</button>
            <br/>
            {this.state.moviesList.results.length} results:
        <button style={{ display: this.state.page == 1 ? "none" : "" }} onClick={this.goToPage.bind(this, this.state.page - 1)} >Prev</button>
            <button style={{ display: this.state.moviesList.results.length <20 ? "none" : "" }} onClick={this.goToPage.bind(this, this.state.page + 1)} >Next</button>

            <div>
                {

                    this.state.moviesList.results.map((movie) => {
                        return <MovieComponent movieInformation={movie} />
                    })
                }
            </div>
            <button style={{ display: this.state.page == 1 ? "none" : "" }} onClick={this.goToPage.bind(this, this.state.page - 1)} >Prev</button>
            <button style={{ display: this.state.moviesList.results.length <20 ? "none" : "" }} onClick={this.goToPage.bind(this)} >next</button>
        </div> : "No Movies" : "No Movies"
    }
}

export default MovieListing

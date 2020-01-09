import React from 'react'
import Link from './activeLink'
class MovieComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            movieInformation: this.props.movieInformation
        }
    }

    componentWillReceiveProps(props) {
        // console.log(props.movieInformation);
        if (props.movieInformation != this.state.movieInformation) {
            this.setState({
                movieInformation: props.movieInformation

            })
        }
    }


    render() {
        return <Link href={`/singleMovie/${this.state.movieInformation.id}`} >
            {
                <div style={{ border: "1px solid", padding: "1%", margin: "1%" ,cursor : "pointer"}}>
                    <h2>{this.state.movieInformation.title}</h2>
                    {/* <img src={this.state.movieInformation.poster_path}></img> */}
                    <h3>votes: {this.state.movieInformation.vote_count}</h3>
                    <p>{this.state.movieInformation.overview}</p>
                    <p>{this.state.movieInformation.release_date}</p>
                </div>
            }
        </Link>
    }
}

export default MovieComponent;

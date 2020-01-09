import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { fetchTheSingleMovieData } from '../../src/utils';

const SingleMovie = () => {
    const router = useRouter()
    const { id } = router.query
    const [singleMovieInfo, setSingleMovieInfo] = useState(false)
    useEffect(() => {
        console.log("id changed")
        fetchTheSingleMovieData(id)
            .then(res => {
                setSingleMovieInfo(res)
            })

    }, [id])

    return <div style={{width : "60%"}}>
        <h2>{singleMovieInfo.original_title} <a href={singleMovieInfo.homepage}>visit</a></h2>
        <h3>{singleMovieInfo.genres && singleMovieInfo.genres.map((genre, idx) => { return idx ? ", " + genre.name : genre.name })}</h3>
        <p>Votes: {singleMovieInfo.vote_count}</p>
        <p>{singleMovieInfo.overview}</p>
    </div>
}

export default SingleMovie
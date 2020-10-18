import React, { useState, useEffect } from 'react';
import axios from './axios';
const base_url = "https://image.tmdb.org/t/p/original/"
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setmovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setmovies(request.data.results)
            return request;
        }
        fetchData()
    }, [fetchUrl]);
    return (
        <div className="movie__row">
            <h2>{title}</h2>
            <div className={"row__posters"}>
                {movies.map(data => {
                    return (
                        <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={movies.id} src={`${base_url}${isLargeRow ? data.poster_path : data.backdrop_path}`} alt={movies.name} />
                    )
                })}
            </div>
        </div>
    )
}

export default Row

import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './request'

function Banner() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(
                request.data.results
                [Math.floor(Math.random() * request.data.results.length)]
            );
            return request;
        }
        fetchData();
    }, [])
    console.log(movies)
    return (
        <header className="banner"
            style={{
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`
            }}
        >
            <div className="banner__Content">
                <h1c className="banner__title">{movies?.title || movies?.name || movies?.original_name}</h1c>
                <div className="banner__button">
                    <button >Play</button>
                    <button >My List</button>
                </div>
                <h3 className="banner__description">
                    {movies?.overview}
                </h3>
            </div>

        </header>
    )
}

export default Banner

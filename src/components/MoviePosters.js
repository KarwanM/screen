import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Data from '../db.json'

const MoviesPosters = ({ posters, firstPoster, numOfPosters, sorted, genre }) => {
    const [moviePosters, setMoviePosters] = useState()
    const [startingPoster, setIsStartingPoint] = useState(0)

    useEffect(() => {
        if (posters === 'movies') {
            setIsStartingPoint(0)
        }
        else if (posters === 'series' || posters === 'home') {
            setIsStartingPoint(24)
        }

        setMoviePosters(Data.movies)

    }, [genre, sorted, posters])

    return (
        <div className="posters">
            {moviePosters ? (
                moviePosters.slice(startingPoster, startingPoster + numOfPosters).map(movie => {
                    return (
                        <NavLink to={"/moviedetails/?id=" + movie.id} key={movie.id}>
                            <div className="poster-wrapper">
                                <img src={movie.poster} alt="Movie Poster"></img>
                                <div className="shade"></div>
                                <div className="duration">
                                    <span>{movie.duration}</span>
                                </div>
                                <div className="view">
                                    <span>{Math.floor(Math.random() * 10000) + 20}</span>
                                </div>
                                <div className="poster-extra">
                                    <h2 className="rate">{movie.rate}</h2>
                                    <p className="language">{"Language: " + movie.language}</p>
                                    <div className="age-rate">
                                        <h3>{movie.age_rate}</h3>
                                    </div>
                                </div>
                            </div>
                            <h3 className="poster-title">{movie.title}</h3>
                        </NavLink>
                    )
                })

            )
                : (<h1>Loading...</h1>)}

        </div>
    )

}

export default MoviesPosters
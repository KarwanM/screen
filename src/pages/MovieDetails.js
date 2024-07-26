import React from 'react'
import { NavLink } from 'react-router-dom'
import Data from '../db.json'

const Details = () => {

    window.scrollTo(0, 0);
    
    const id = new URLSearchParams(window.location.search).get('id') -1
    const movie = Data.movies[id]

    return (
        <div>
            <div className="movie-details">
                <img src={movie.poster} alt="Poster"></img>
                <div className="details">
                    <div>
                        <h1 className="details-title">{movie.title + ' (' + movie.year + ')'}</h1>
                    </div>
                    <div className="details-genre">
                        {movie.genre.map(each => {
                            return (
                                <p key={movie.id}>{each}</p>
                            )
                        })}
                    </div>
                    <h3 className="details-brif">{movie.brief}</h3>
                    <span className="details-line details-top-line"></span>
                    <div className="details-wrapper">
                        <span>Stars:</span><h4>{movie.stars.join(', ')}</h4>
                        <span>Director:</span><h4>{movie.director.join(', ')}</h4>
                        <span>Duration:</span><h4>{movie.duration}</h4>
                        <span>Language:</span><h4>{movie.language}</h4>
                        <span>Seen:</span><h4>{Math.floor(Math.random() * 10000) + 20}</h4>
                        <span>Rate:</span><h4>{movie.rate}</h4>
                    </div>
                    <span className="details-line details-bottom-line" />
                </div>
            </div>
            <NavLink to={"/watchonline/?id=" + movie.id} className="watch-online">
                <h3>WATCH ONLINE</h3>
            </NavLink>
            <div className="trailer">
                <iframe src={movie.trailer} frameBorder="0" title="Movie Trailer" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Details
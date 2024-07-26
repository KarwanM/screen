import React, { useState, useEffect } from 'react'
import Data from '../db.json'

const SlideShow = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [slideShow, setSlideShow] = useState()

    useEffect(() => {

        setSlideShow(Data.movies.map(slide => {
            return slide.land_poster
        }))

        const timer = setInterval(() => {
            if (currentSlide === 4) {
                setCurrentSlide(0)
            } else {
                setCurrentSlide(currentSlide + 1)
            }
        }, 5000);
        return () => {
            clearInterval(timer);
        }
    }, [currentSlide])

    const nextSlide = () => {
        if (currentSlide === 4) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }
    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(4)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }



    return (
        <div className="slide-show">{slideShow ? (
            <div className="slide-show-wrapper">
                <img src={slideShow[currentSlide]} alt="Slides" />
                <span className="next-slide" onClick={nextSlide}>&rsaquo;</span>
                <span className="prev-slide" onClick={prevSlide}>&lsaquo;</span>
            </div>
        ) :
            <h1>Loading...</h1>}
        </div>

    )
}

export default SlideShow
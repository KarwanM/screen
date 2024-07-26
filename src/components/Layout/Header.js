import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Data from '../../db.json'
import searchIcon from '../../images/search_icon.svg.png'


const Header = () => {
    const [isDown, setIsDown] = useState(false)
    const [userId, setUserId] = useState('')
    const [searchDown, setSearchDown] = useState(false)
    const [searchData, setSearchData] = useState({})
    const [result, setResult] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        window.addEventListener("resize", handleWidth)

        setUserId(Data.movies)

        return () => {
            window.removeEventListener("resize", handleWidth)
        }
    }, [])

    const dropDown = () => {
        setIsDown(!isDown)
    }

    const handleClick = () => {
        setIsDown(false)
    }

    const handleWidth = () => {
        setSearchDown(false)
        if (window.innerWidth < 720) {
            setIsDown(false)
        }
    }

    const handleSignOut = async () => {

    }

    const handleSearching = () => {
        setSearchDown(!searchDown)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if (e.target.value.length > 1) {
            setSearchData(e.target.value)
            setIsLoading(true)
        }
        else {
            setIsLoading(false)
        }
    }

    const SignedOut = (
        <>
            <li><NavLink to='/signup'>SignUp</NavLink></li>
            <li><NavLink to='/signin'>SignIn</NavLink></li>
        </>
    )

    const SignedIn = (
        <>
            <li><NavLink to='/' onClick={handleSignOut}>SignOut</NavLink></li>
            <li> <p>Welcome {userId}</p></li>
        </>
    )

    return (
        <header>
            <div className="banner">
                <h1>Screen</h1>
            </div>

            <nav>
                <ul className="dropdown">
                    <div className="drop-btn" onClick={dropDown}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div onClick={handleClick} className={isDown ? "show-dropdown dropdown-content" : "hide-dropdown dropdown-content"}>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/movies'>Movies</NavLink></li>
                        <li><NavLink to='/series'>Series</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/contact'>Contact Us</NavLink></li>
                    </div>
                    <div onClick={handleClick} className={isDown ? "show-right nav-right" : "hide-right nav-right"}>
                        {false ? SignedIn : SignedOut}
                    </div>
                    <div className="search">
                        <div onClick={handleSearching}>
                            <img src={searchIcon} alt="Search Icon" />
                        </div>
                        {searchDown ? <input onChange={handleSearch} type="text" placeholder="Search..." /> : <></>}
                        <div className="search-wrapper">
                            {Data.movies.filter(data => {
                                return (searchData.length > 1 && data.title.toLowerCase().indexOf(searchData.toLowerCase()) >= 0)
                            }).map(title => {
                                return (
                                    <div className="search-poster" key={title._id}>
                                        <img src={title.poster} alt="Search Poster" />
                                        <div className="search-title">
                                            <a href={"/details?id=" + title.id}>{title.title}</a>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header
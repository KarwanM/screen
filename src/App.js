import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'
import About from './pages/About'
import Contact from './pages/Contact'
import MovieDetails from './pages/MovieDetails'
import WatchOnline from './pages/WatchOnline'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import Footer from './components/Layout/Footer'
import NoConnection from './components/404'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-container">
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/screen' element={Home} />
            <Route path='/movies' element={<Movies/>} />
            <Route path='/series' element={<Series/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/moviedetails' element={<MovieDetails/>} />
            <Route path='/signIn' element={<SignIn/>} />
            <Route path='/signUp' element={<SignUp/>} />
            <Route path='/watchonline' element={<WatchOnline/>} />
            <Route path='/404' element={<NoConnection/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
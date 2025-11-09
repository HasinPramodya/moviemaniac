import './App.css'
import { MovieList } from './components/MovieList/MovieList'
import Navbar from './components/Navbar/Navbar'


function App() {
  

  return (
    <>
    <div className='app montserrat-heading'>
          <Navbar/>
          <MovieList/>
    </div>
      
    </>
  )
}

export default App

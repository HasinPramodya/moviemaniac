import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import "./MovieList.css";
import { MovieCard } from './MovieCard';
import { Filtergroup } from './Filtergroup';

export const MovieList = ({type, title, emoji}) => {

    const [movies, setMovies] = useState([]);
    const [minRating, setMinRating] = useState(0);
    const [filteredMovies, setFilteredMovies] =useState([]);
    const [sort,setSort] = useState({
        by : "default",
        order : "asc",
    })

   useEffect(()=>{
        
            fetchMovies()
        
   },[])

   useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filteredMovies, [sort.by], [sort.order]);
      setFilteredMovies(sortedMovies);
    }
  }, [sort]);
   const fetchMovies = async () =>{
      const response = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=cbcab2610eae38022230c878be29e56f`);
      const data = await response.json()
      setMovies(data.results)
      setFilteredMovies(data.results)
   }

   const handleFilter = rate =>{
       if(minRating === rate){
        setMinRating(0)
        setFilteredMovies(movies)
        
       }else{
        setMinRating(rate)
       const filredMovies = movies.filter(movie => movie.vote_average >= rate)
       setFilteredMovies(filredMovies)
       }
       
   }

   const handleSort = (e) =>{
     const {name, value} = e.target;
     setSort((prev) => ({...prev, [name] : value}))
   };
   console.log(sort);
  return (
      <section className="movie_List" id={type}>
        <header className="align-center movie_list_header">
            <h2 className="align-center movie_list_heading">{title}{""}<img src={emoji} alt={`${emoji} icon`} className="navbar_emoji"/></h2>
            <div className="align-center movie_list_fs">
                    
                <Filtergroup minRating={minRating} onRatingClick={handleFilter}/>
                <select name="by" id="" className="movie_sorting" onChange={handleSort} value={sort.by}>
                    <option value="default">SortBy</option>
                    <option value="release_date">Date</option>
                    <option value="vote_average">Rating</option>
                </select>
                <select name="order" id="" className="movie_sorting" onChange={handleSort} value={sort.order}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                    
                </select>

            </div>
        </header>

        <div className="movie_cards">
           {
            filteredMovies.map(
                (movie)=>(<MovieCard key={movie.id} movie={movie}/>)
            )
           }
        </div>
      </section>
  )
}

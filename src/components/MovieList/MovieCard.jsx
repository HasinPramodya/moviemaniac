import React from 'react'
import './MovieCard.css'
import Star from '../../assets/star.png'

export const MovieCard = () => {
  return (
   <a href="" className="movie_card">
     <img src="https://yesimadesigner.com/wp-content/uploads/2018/06/10.jpg?x29684&x29684&x29684" alt="movie poster" className="movie_poster"/>
     <div className="movie_details">
        <h3 className="movie_details_heading">Movie Name</h3>
        <div className="movie_date_rate">
            <p>10-20-2020</p>
            <p>8.0 <img src="{Star}" alt="rating icon" className="card_emoji"/></p>
        </div>
        <p className='movie_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     </div>
   </a>
  )
}

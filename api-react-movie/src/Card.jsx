// Card.js
import React from 'react';

function MoviesCard({ movie, onClick }) {
  const handleButtonClick = () => {
    onClick(movie);
  };

  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} />
      <button onClick={handleButtonClick}>Show Details</button>
    </div>
  );
}

export default MoviesCard;

//<button onClick={() => onButtonClick(movie)}>Ver características</button>
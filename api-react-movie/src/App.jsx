// App.jsx
import React, { useState, useEffect } from 'react';
import { getMovies } from "./api/getmovies"; 
import MoviesCard from "./Card"; 

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    getMovies()
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h1>Movies</h1>
      <div className="movie-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-wrapper">
            <MoviesCard
              movie={movie}
              onClick={handleMovieClick}
            />
            {selectedMovie && selectedMovie.id === movie.id && (
              <div className="movie-details">
               
                <p>Year: {selectedMovie.year}</p>
                <p>Genre: {selectedMovie.genre}</p>
                <p>Rate: {selectedMovie.rate}</p>
                <p>Director: {selectedMovie.director}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

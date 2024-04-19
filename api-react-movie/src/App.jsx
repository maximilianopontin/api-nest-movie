import React, { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/movies/') // Ajusta la URL según la ubicación de tu backend
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []); // El segundo argumento vacío asegura que useEffect solo se ejecute una vez al montar el componente

  const handleMovieClick = (id) => {
      fetch(`http://localhost:3000/movies/${id}`) // Hace una solicitud GET a movies/id
        .then(response => response.json())
        .then(data => setSelectedMovie(data))
        .catch(error => console.error(`Error fetching movie with id ${id}:`, error));
    };
  
  return (
    <div>
      <h1>Movies</h1>
      <div className="movie-container">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
            <button onClick={() => handleMovieClick(movie.id)}>Ver detalles</button>
            <p>Director: {movie.director}</p>
            <p>Year: {movie.year}</p>
            <p>Genre: {movie.genre}</p>
            <img src={movie.poster} alt={movie.title} />
            <p>Rate: {movie.rate}</p>
            {/* Agrega más campos según los datos que tengas en tus películas */}
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div>
          <h2>Detalles de la película:</h2>
          <p>Título: {selectedMovie.title}</p>
          <p>Director: {selectedMovie.director}</p>
          {/* Agrega más detalles aquí según la estructura de tu objeto de película */}
        </div>
      )}
    </div>
  );
}

export default App;

/* return (
    <div>
      <h1>Lista de películas</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id} onClick={() => fetchMovieById(movie.id)}>
            {movie.title}
          </li>
        ))}
      </ul>
      {selectedMovie && (
        <div>
          <h2>Detalles de la película:</h2>
          <p>Título: {selectedMovie.title}</p>
          <p>Director: {selectedMovie.director}</p>
          
          </div>
        )}
      </div>
    );
  }*/
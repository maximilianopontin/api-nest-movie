import { Injectable, NotFoundException } from '@nestjs/common';
//import { CreateMovieDto } from './dto/create-movie.dto';
//import { UpdateMovieDto } from './dto/update-movie.dto';
import { results } from '../model/movies.json';
//importamos objeto results que contiene nuestra base de datos en json
import { Imovie } from '../movies/entities/movie.entity'; //importamos interface que contiene estructura de la pelicula

@Injectable()
export class MoviesService {
  private movies: Imovie[]; //movies contendrá la lista de películas.

  constructor() {
    this.movies = results;
  }

  async findMovies(): Promise<Imovie[]> {// método devuelve una promesa de un array de películas 
    return this.movies; // lista completa de películas almacenadas en la propiedad movies.
  }

  async findOneMovie(id: string): Promise<Imovie> {
    try {
      const movie = results.find((movie) => movie.id === id);//buscame en objeto results, la movie que coincida con el id ingresado por parametro y devolveme el resultado en una constante movie
      if (Object.keys(movie).length)
      return movie;
    } catch (error) { //se lanza excepcion 
      throw new NotFoundException(`Track con id '${id}' no existe`);
    }
}
/*
  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
   }*/


  }
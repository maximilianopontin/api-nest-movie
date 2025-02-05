import { Injectable, NotFoundException } from '@nestjs/common';
//import { CreateMovieDto } from './dto/create-movie.dto';
//import { UpdateMovieDto } from './dto/update-movie.dto';
import { results } from '../model/movies.json';
//importamos objeto results que contiene nuestra base de datos en json
import { Imovie } from '../movies/entities/movie.entity'; //importamos interface que contiene estructura de la pelicula
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class MoviesService {
  private movies: Imovie[];

  constructor() {
    this.movies = this.loadMovies();
  }

  private loadMovies(): Imovie[] {
    try {
      const filePath = path.join(__dirname, '../../movies.json'); // Asegúrate de que la ruta sea correcta
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error al cargar el archivo movies.json:', error);
      return [];
    }
  }

  async findMovies(): Promise<Imovie[]> {
    return this.movies;
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
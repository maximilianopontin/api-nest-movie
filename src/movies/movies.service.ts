import { Injectable, NotFoundException } from '@nestjs/common';
//import { CreateMovieDto } from './dto/create-movie.dto';
//import { UpdateMovieDto } from './dto/update-movie.dto';
import { results } from '../model/movies.json'; //importamos objeto results que contiene nuestra base de datos en json

@Injectable()
export class MoviesService {
  // create(createMovieDto: CreateMovieDto) {
  // return 'This action adds a new movie';
  // }

  findMovies() {
    return results;
  }

  findOneMovie(id: string) {
    try {
      const movie = results.find((movie) => movie.id === id);//buscame en objeto results, la movie que coincida con el id ingresado por parametro y devolveme el resultado en una constante movie
      if (Object.keys(movie).length)
      return movie;
    } catch (error) {
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
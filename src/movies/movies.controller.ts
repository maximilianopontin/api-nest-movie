import { Controller, Get, Post, Body, Patch, Param, Delete,HttpStatus,Res, ParseUUIDPipe } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Imovie } from '../movies/entities/movie.entity';
//import { CreateMovieDto } from './dto/create-movie.dto';
//import { UpdateMovieDto } from './dto/update-movie.dto';
 


@Controller('movies') // todas las rutas definidas en este controlador estarán precedidas por /movies.
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  /*@Post()
  create(@Body() createMovieDto: CreateMovieDto):promise<movie> {
    return this.moviesService.create(createMovieDto);
  }
*/
  @Get() //maneja las solicitudes GET a la ruta /movies
  async findMovies():Promise<Imovie[]> {
    return this.moviesService.findMovies();
  }

  @Get(':id') // maneja solicitudes GET a la ruta /movies/:id. 
  async findOneMovie(@Param('id') id: string):Promise<Imovie>{//Utiliza el decorador @Param('id') para obtener el valor del parámetro de la UR
    return this.moviesService.findOneMovie(id); // llama al método del servicio para buscar una película por su ID y devolverla.
  }
  //utilice validacion por uuid, ya que el id de nuestras movies en este caso esta en ese formato. tambien se podria validar por string.

 /* @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(+id, updateMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.remove(+id);
  }

*/
}
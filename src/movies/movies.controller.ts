import { Controller, Get, Post, Body, Patch, Param, Delete,HttpStatus,Res, ParseUUIDPipe } from '@nestjs/common';
import { MoviesService } from './movies.service';

//import { CreateMovieDto } from './dto/create-movie.dto';
//import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  /*@Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }
*/
  @Get()
  findMovies() {
    return this.moviesService.findMovies();
  }

  @Get(':id') // new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) uuid:
  findOneMovie(@Param('id') id: string) {
    return this.moviesService.findOneMovie(id);
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
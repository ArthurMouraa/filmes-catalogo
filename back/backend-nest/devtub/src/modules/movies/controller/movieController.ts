import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { CreateMovie } from "../useCase/createMovie/create.movie";
import { GetMovie } from "../useCase/getMovie/get.movie";
import { DeleteMovie } from "../useCase/deleteMovie/delete.movie";
import { UpdateMovie } from "../useCase/updateMovie/update.movie";


@Controller('movie')
export class MovieController {

  constructor(private createMovie: CreateMovie,
    private getMovie: GetMovie,
    private deleteMovie: DeleteMovie,
    private updateMovie: UpdateMovie,
  ) {

  }



  @Post("create")
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: MovieRequest) {
    const result = await this.createMovie.execute(dto)

    return {
      message: 'Filme criado com sucesso',
      data: result, 
    };
  }

  @Get("movies")
  @HttpCode(HttpStatus.OK)
  async getAll() {

    const movies = await this.getMovie.getAll()

    if (movies.length === 0) {
      return {
        message: 'Nenhum filme encontrado.',
        data: [],
      };
    }
    return {
      message: 'Lista de filmes recuperada com sucesso.',
      data: movies,
    };

  }


  @Delete(":id")
  @HttpCode(HttpStatus.ACCEPTED)
  async movieDelete(@Param('id') id: string): Promise<Boolean> {
    return await this.deleteMovie.execute(Number(id))
  }

  @Put(":id")
  async movieUpdate(@Param('id') id: string, @Body() data: UpdateMovieRequest): Promise<void> {
    console.log("id passado********************************>: ", id)
    // const up = parseInt(id);
    await this.updateMovie.execute(Number(id), data);
  }









}
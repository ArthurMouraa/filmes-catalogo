import { Injectable } from "@nestjs/common";
import { MovieRepository } from "../../repositories/movie.repository";


@Injectable()
export class UpdateMovie {

  constructor(private moviereposiry: MovieRepository) {

  }

  async execute(id: number, data: UpdateMovieRequest) {
    return await this.moviereposiry.update(id, data);
  }



}
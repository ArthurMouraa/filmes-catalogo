import { Injectable } from "@nestjs/common";
import { MovieRepository } from "../../repositories/movie.repository";


@Injectable()
export class DeleteMovie {

  constructor(private movieRepository: MovieRepository) {
  }


  async execute(id: number) {
    const response = await this.movieRepository.delete(id);
    return response;
  }


}
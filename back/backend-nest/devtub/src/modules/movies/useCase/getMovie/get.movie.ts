import { Injectable } from "@nestjs/common";
import { MovieRepository } from "../../repositories/movie.repository";

@Injectable()
export class GetMovie {

  constructor(private movieRepository: MovieRepository) {
  }

  async getAll() {
    return await this.movieRepository.getAll();

  }




}
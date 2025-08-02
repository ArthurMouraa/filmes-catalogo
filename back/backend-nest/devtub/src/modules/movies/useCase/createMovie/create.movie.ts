import { Injectable } from "@nestjs/common";
import { MovieRepository } from "../../repositories/movie.repository";

@Injectable()
export class CreateMovie {

  constructor(private movieRepository: MovieRepository) {
  }

  async execute(dto: MovieRequest) {
    return await this.movieRepository.create(dto)

  }



}
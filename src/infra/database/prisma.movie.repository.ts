import { Injectable } from "@nestjs/common";
import { MovieRepository } from "src/modules/movie/repositories/movie.repository";
import { PrismaService } from "./prisma-service";
import { Movie } from "@prisma/client";

@Injectable()
export class PrismaMovieRepository extends MovieRepository {


  constructor(prismaService: PrismaService) {
    super()
  }

  create(movie: Movie): Promise<void> {
    throw new Error("Method not implemented.");
  }



}
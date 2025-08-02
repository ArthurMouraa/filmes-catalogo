import { Module } from '@nestjs/common';
import { MovieRepository } from './repositories/movie.repository';
import { MovieController } from './controller/movieController';
import { PrismaService } from '../../infra/database/prisma.service';
import { prismaMovieRepository } from '../../infra/database/prisma-movie-repository';
import { CreateMovie } from './useCase/createMovie/create.movie';
import { GetMovie } from './useCase/getMovie/get.movie';
import { DeleteMovie } from './useCase/deleteMovie/delete.movie';
import { UpdateMovie } from './useCase/updateMovie/update.movie';
import { CloudinaryService } from 'src/infra/cloud/cloudinary/cloudinary.service';



@Module({
  imports: [],
  controllers: [MovieController],
  providers: [PrismaService, CreateMovie, GetMovie, DeleteMovie, UpdateMovie, CloudinaryService, {
    provide: MovieRepository,           // Token (interface)
    useClass: prismaMovieRepository
  }],
})

export class MoviesModule { }

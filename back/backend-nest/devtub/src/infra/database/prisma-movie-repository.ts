import { Injectable, NotFoundException } from "@nestjs/common";
import { MovieRepository } from "../../modules/movies/repositories/movie.repository";
import { PrismaService } from "./prisma.service";
import { Movie } from "src/modules/movies/entities/movie";
import { CloudinaryService } from "../cloud/cloudinary/cloudinary.service";
import { MovieResponseDto } from "src/modules/movies/useCase/getMovie/getMovie.dto.response";
// import { MovieResponseDto } from "src/modules/movies/useCase/getMovie/getMovie.dto.response";



@Injectable()
export class prismaMovieRepository extends MovieRepository {



  constructor(private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService
  ) {
    super()
  }

  async create(dto: MovieRequest): Promise<Movie> {

    const movie: Movie = new Movie(
      {
        imageUrl: dto.imageUrl,
        movieUrl: dto.movieUrl,
        title: dto.title,
        category: dto.category,
        year: dto.year,
        description: dto.description
      }

    )

    await this.prisma.movie.create({
      data: {
        imageUrl: movie.imageUrl,
        movieUrl: movie.movieUrl,
        title: movie.title,
        category: movie.category,
        year: movie.year,
        description: movie.description,
      }
    })


    return movie

  }

  async getAll(): Promise<MovieResponseDto[]> {
    const movies = await this.prisma.movie.findMany()

    const listMovieResponse = movies.map((movie) => {
      const resp: MovieResponseDto = {
        id: movie.id,
        imageUrl: movie.imageUrl,
        movieUrl: movie.movieUrl,
        title: movie.title,
        category: movie.category,
        year: movie.year,
        description: movie.description
      }
      return resp;
    })


    return listMovieResponse
  }


  async delete(id: number): Promise<Boolean> {

    try {

      const movie = await this.prisma.movie.findUnique({
        where: { id: id }
      })

      if (movie?.movieUrl) {
        const publicId = this.cloudinaryService.extractPublicId(movie.movieUrl);
        this.cloudinaryService.deleteVideo(publicId)
      }
      if (movie?.imageUrl) {
        const publicId = this.cloudinaryService.extractPublicId(movie.imageUrl);
        this.cloudinaryService.deleteImage(publicId)
      }

      await this.prisma.movie.delete({ where: { id } });
      return true;


    } catch (error) {
      throw new NotFoundException("Filme nao encontrado")
    }

  }




  async update(id: number, data: UpdateMovieRequest): Promise<void> {

    console.log("id: ", id)
    console.log("dados: ", data.title)

    const movie = await this.prisma.movie.findUnique({
      where: { id: id }
    })

    if (!movie) {
      throw new Error("Filme nao encontrado")
    }

    const updateData: UpdateMovieRequest = {}

    if (data.imageUrl) {
      const publicId = this.cloudinaryService.extractPublicId(movie.imageUrl);
      this.cloudinaryService.deleteImage(publicId);
      updateData.imageUrl = data.imageUrl;
    }

    if (data.movieUrl) {
      const publicId = this.cloudinaryService.extractPublicId(movie.movieUrl)
      this.cloudinaryService.deleteVideo(publicId);
      updateData.movieUrl = data.movieUrl;

    }

    if (data.title) updateData.title = data.title;
    if (data.category) updateData.category = data.category;
    if (data.year) updateData.year = data.year;
    if (data.description) updateData.description = data.description;


    await this.prisma.movie.update({
      where: { id },
      data: updateData
    });

  }

  




}
import { Movie } from "../entities/movie";
import { MovieResponseDto } from "../useCase/getMovie/getMovie.dto.response";



export abstract class MovieRepository {

  abstract create(dto: MovieRequest): Promise<Movie>;

  abstract getAll(): Promise<MovieResponseDto[]>

  abstract delete(id: number): Promise<Boolean>;

  abstract update(id: number, data:UpdateMovieRequest): Promise<void>;

  



}
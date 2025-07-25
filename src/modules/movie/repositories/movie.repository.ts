import { Movie } from "@prisma/client";


export abstract class MovieRepository{

abstract create(movie:Movie): Promise<void>


}
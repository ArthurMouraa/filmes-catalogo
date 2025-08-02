import { Module } from '@nestjs/common';
import { UserModule } from "./modules/users/user.module"
import { MoviesModule } from './modules/movies/movies.module';

@Module({
  imports: [UserModule, MoviesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

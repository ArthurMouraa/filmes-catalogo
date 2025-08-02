import { Module } from '@nestjs/common';
import { UserRepository } from '../users/repositories/user.repository';
import { PrismaService } from '../../infra/database/prisma.service';
import { PrismaUserRepository } from '../../infra/database/prisma-user.repository';
import { UserController } from './controllers/userController';
import { CreateUserUseCase } from "../users/useCases/createUser/createUser.useCase"
import { FindAllUser } from './useCases/findAllUser/findAllUser.userCase';
import { findById } from './useCases/findByIdUser/findByIdUser';
import { UpdateUser } from './useCases/updateUser.ts/updateUser';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [CreateUserUseCase, FindAllUser, findById, UpdateUser,  PrismaService, {
    provide: UserRepository,           // Token (interface)
    useClass: PrismaUserRepository
  }],
})
export class UserModule { }

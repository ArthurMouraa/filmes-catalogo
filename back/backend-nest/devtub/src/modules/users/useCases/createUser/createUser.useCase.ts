import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../repositories/user.repository";
import { CreateUserRequest } from "../dto/createUser.dto.req";
import { User } from "../../entities/user.entity";
import { hash } from "bcrypt";
import { Role } from '@prisma/client'
import { CreateUserResponse } from "../dto/createUser.dto.resp";


@Injectable()
export class CreateUserUseCase {

  constructor(private userRepository: UserRepository) {

  }

  async create({ name, email, password, role }: CreateUserRequest) {

    const user = new User({
      name,
      email,
      password: await hash(password, 10),
      role: role ?? Role.user,
    });
    await this.userRepository.create(user);

    const response: CreateUserResponse = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.creatAt
    }


    return response
  }


}
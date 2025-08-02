import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../repositories/user.repository";
import { CreateUserRequest } from "../dto/createUser.dto.req";
import { UpdateUserReq } from "../dto/updateUser.dto.req"
import { User } from "../../entities/user.entity";
import { hash } from "bcrypt";

@Injectable()
export class UpdateUser {

  constructor(private userRepository: UserRepository) {
  }


  async updateUser(id: string, data: UpdateUserReq) {

    const user = await this.userRepository.findById(id);

    if (data.name) user.name = data.name
    if (data.email) user.email = data.email
    if (data.role) user.role = data.role
    if (data.password) user.password = await hash(data.password, 10);

    if (!user) {
      throw new Error("Nao existe")
    }


    await this.userRepository.toUpdate(user);

  }



}
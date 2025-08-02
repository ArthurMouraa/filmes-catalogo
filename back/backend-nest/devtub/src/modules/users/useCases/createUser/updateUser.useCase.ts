import { UserRepository } from "../../repositories/user.repository";
import { CreateUserRequest } from "../dto/createUser.dto.req";


export class UpdateUser {


  constructor(private userRepository: UserRepository) {
  }


  async updateUser(dto: CreateUserRequest) {



  }


}
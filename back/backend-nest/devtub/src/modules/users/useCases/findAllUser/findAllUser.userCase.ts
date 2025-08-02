import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../repositories/user.repository";


@Injectable()
export class FindAllUser{

  constructor(private userRepository: UserRepository){

  }

  async findAllUsers(){
    const users = await this.userRepository.findAll()
    
    return users;
  }



}
import { User } from "../entities/user.entity";
import { CreateUserResponse } from "../useCases/dto/createUser.dto.resp";
import { Credentials } from "../useCases/dto/credentials";
import { FindAllUserResp } from "../useCases/dto/findAllUser.dto.resp";
import { FindByIdResp } from "../useCases/dto/findById.dto.resp";
import { FindByIdUserReq } from "../useCases/dto/findByIdUser.dto.req";

import { UserRepository } from "./user.repository";



export class UserRepositoryInMemory implements UserRepository {
  findById(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  
  findCredentials(id: string): Promise<Credentials> {
    throw new Error("Method not implemented.");
  }

  

  
  
  
  toUpdate(user: User): Promise<CreateUserResponse> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }


  database: User[] = [];
  


  


  async create(user: User): Promise<void> {
    this.database.push(user)
    console.log(this.database)
  }

  async findAll(): Promise<FindAllUserResp[]> {
    return this.database.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.creatAt,
    }));
  
  }


}

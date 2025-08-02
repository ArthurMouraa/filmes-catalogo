import { User } from "../entities/user.entity";
import { CreateUserResponse } from "../useCases/dto/createUser.dto.resp"
import { Credentials } from "../useCases/dto/credentials";
import { FindAllUserResp } from "../useCases/dto/findAllUser.dto.resp"
import { FindByIdResp } from "../useCases/dto/findById.dto.resp";
import { FindByIdUserReq } from "../useCases/dto/findByIdUser.dto.req";

export abstract class UserRepository {

  abstract create(user: User): Promise<void>;

  abstract findAll(): Promise<FindAllUserResp[]>;

  abstract findById(id: string): Promise<User>;

  abstract delete(id: string): Promise<void>

  abstract toUpdate(user: User): Promise<CreateUserResponse>

  abstract findCredentials(id:string): Promise<Credentials>

}

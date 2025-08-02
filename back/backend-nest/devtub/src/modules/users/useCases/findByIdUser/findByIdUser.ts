import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../repositories/user.repository";
import { FindByIdResp } from "../dto/findById.dto.resp"

@Injectable()
export class findById {


  constructor(private repository: UserRepository) {

  }

  async findById(id: string) {

    const user =  await this.repository.findById(id);

    const response: FindByIdResp =
    {
      id:user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.creatAt
    }
    return response;

  }


}
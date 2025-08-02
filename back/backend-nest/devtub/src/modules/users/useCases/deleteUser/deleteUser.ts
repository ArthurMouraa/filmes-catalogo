import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../repositories/user.repository";

@Injectable()
export class DeleteUser{

constructor(private userRepository:UserRepository){
}


async DeleteUser(id:string){
  this.userRepository.delete(id)
}

}
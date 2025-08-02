import { UserRepository } from "../../repositories/user.repository";



export class FindCredentials{

  constructor(private userRepository: UserRepository){
  }

  async execute(id:string){

    const user = await this.userRepository.findCredentials(id);

    return user;
  }

}
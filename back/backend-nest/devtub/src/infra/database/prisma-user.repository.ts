import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../modules/users/repositories/user.repository";
import { User } from "../../modules/users/entities/user.entity";
import { PrismaService } from "./prisma.service";
import { CreateUserResponse } from "../../modules/users/useCases/dto/createUser.dto.resp";
import { FindAllUserResp } from "../../modules/users/useCases/dto/findAllUser.dto.resp"
import { Credentials } from "src/modules/users/useCases/dto/credentials";


@Injectable()
export class PrismaUserRepository extends UserRepository {

  constructor(private readonly prisma: PrismaService) {
    super()

  }

  async create(user: User): Promise<void> {
    const data = await this.prisma.user.create({
      data: {
        id: user.id,
        nome: user.name,
        email: user.email,
        senha: user.password,
        role: user.role
      }
    })

  }

  async findAll(): Promise<FindAllUserResp[]> {

    const users = await this.prisma.user.findMany()

    const result: FindAllUserResp[] = users.map((users) => ({
      id: users.id,
      name: users.nome, // se no banco está como 'nome'
      email: users.email,
      role: users.role,
      createdAt: users.createdAt

    }))

    return result

  }


  async findById(id: string): Promise<User> {

    const user = await this.prisma.user.findUnique({
      where: { id }
    })

    if (!user) {
      throw new Error("Usuario nao encontrado")
    }

    const response = new User({
      name: user.nome,
      email: user.email,
      password: user.senha,
      role: user.role
    },
      user.id

    );

    return response;

  }

  async delete(id: string): Promise<void> {

    const user = await this.prisma.user.findUnique({
      where: { id }
    })

    if (!user) {
      throw new Error("Usuario nao existe")
    }

    await this.prisma.user.delete({
      where: { id }
    })

  }


  async toUpdate(user: User): Promise<CreateUserResponse> {

    const id = user._id

    const userUpdat = await this.prisma.user.update({
      where: { id: user._id },
      data: {
        nome: user.name,
        email: user.email,
        senha: user.password,
        role: user.role,
      }
    })



    const resp: CreateUserResponse = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.creatAt
    }

    return resp;
  }

  async findCredentials(id: string): Promise<Credentials> {
    const user = await this.prisma.user.findUnique({
      where: { id }
    })

    if (!user) {
      throw new Error("Usuário não existe")
    }

    const resp: Credentials = {
      props: {
        name: user.nome,
        email: user.email,
        role: user.role,
        password: user.senha,
        createdAt: user.createdAt
      },
      id: user.id,
    }

    return resp;
  }




}

import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserUseCase } from "../useCases/createUser/createUser.useCase"
import { CreateUserRequest } from "../useCases/dto/createUser.dto.req"
import { CreateUserResponse } from "../useCases/dto/createUser.dto.resp";
import { FindAllUser } from "../useCases/findAllUser/findAllUser.userCase"
import { FindByIdUserReq } from "../useCases/dto/findByIdUser.dto.req"
import path from "node:path";
import { findById } from "../useCases/findByIdUser/findByIdUser";
import { FindByIdResp } from "../useCases/dto/findById.dto.resp"
import { UpdateUserReq } from "../useCases/dto/updateUser.dto.req";
import { User } from "@prisma/client";
import { UpdateUser } from "../useCases/updateUser.ts/updateUser";
import { UpdateId } from "../useCases/dto/updateId";

@Controller('users')
export class UserController {

  constructor(
    private createUser: CreateUserUseCase,
    private findAllUser: FindAllUser,
    private findById: findById,
    private updates: UpdateUser
  ) {
  }


  @Post()
  async create(@Body() dto: CreateUserRequest): Promise<CreateUserResponse> {

    const user = await this.createUser.create(dto);

    return user;

  };

  @Get('all')
  async getAll(): Promise<CreateUserResponse[]> {

    const users: CreateUserResponse[] = await this.findAllUser.findAllUsers()

    return users;
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<FindByIdResp> {
    const user = await this.findById.findById(id);

    return user;
  }

  @Put(':id')
  async update(@Param() id: UpdateId, @Body() dto: UpdateUserReq) {

    await this.updates.updateUser(id.id, dto)

  }



}
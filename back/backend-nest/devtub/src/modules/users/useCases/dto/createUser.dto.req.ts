import { Role } from '@prisma/client' 

export interface CreateUserRequest {
  name: string,
  email: string,
  password: string,
  role: Role
}
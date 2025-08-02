import { Role } from '@prisma/client' 

export interface CreateUserResponse {
  id: string
  name: string,
  email: string,
  role: Role
  createdAt: Date;
}
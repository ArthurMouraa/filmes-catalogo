import { Role } from '@prisma/client'

export interface UserSchema{
  name:string,
  email: string,
  password: string,
  role: Role,
  createdAt: Date
}

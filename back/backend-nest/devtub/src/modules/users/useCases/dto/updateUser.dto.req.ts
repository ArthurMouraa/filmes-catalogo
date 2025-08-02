import { Role } from '@prisma/client'

export interface UpdateUserReq {
  id: string,
  name?: string,
  email?: string,
  password?: string,
  role?: Role
}
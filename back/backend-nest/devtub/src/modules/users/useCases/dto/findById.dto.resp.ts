import { Role } from '@prisma/client'

export interface FindByIdResp {
  id: string
  name: string,
  email: string,
  role: Role
  createdAt: Date;
}
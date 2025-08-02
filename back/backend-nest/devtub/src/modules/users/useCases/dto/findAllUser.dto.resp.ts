import { Role } from '@prisma/client' 

export interface FindAllUserResp {
  id: string,
  name: string,
  email: string,
  role: Role,
  createdAt: Date
}
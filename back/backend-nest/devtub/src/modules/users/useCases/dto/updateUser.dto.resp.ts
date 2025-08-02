import { Role } from '@prisma/client' 

export interface UpdateUserResp {
  id: string,
  name: string,
  email: string,
  role: Role,
  createdAt: Date
}
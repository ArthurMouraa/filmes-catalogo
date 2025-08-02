import { Role } from '@prisma/client'

export interface Credentials {

  props: {
    name: string,
    email: string,
    password: string
    role: Role
    createdAt: Date;

  },
  id: string
}
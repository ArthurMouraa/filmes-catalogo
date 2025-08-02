import { randomUUID, RandomUUIDOptions, UUID } from "crypto";
import { Replace } from "src/utils/replace";
import { Role } from '@prisma/client'

interface UserSchema {
  name: string,
  email: string,
  password: string,
  role: Role,
  createdAt: Date
}


export class User {

  private props: UserSchema;
  public readonly _id: string;

  constructor(props: Replace<UserSchema, { createdAt?: Date }>, id?: string) {
    this._id = id ?? crypto.randomUUID();

    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    }

  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;

  }

  get email(): string {
    return this.props.email;
  }

  set email(email: string) {
    this.props.email = email;

  }

  get password(): string {
    return this.props.password;
  }

  set password(password: string) {
    this.props.password = password;
  }

  get role(): Role {
    return this.props.role;
  }

  set role(role: Role) {
    this.props.role = role;
  }

  get creatAt(): Date {
    return this.props.createdAt;
  }


}
import { randomUUID } from "crypto"
import { Replace } from "src/utils/replace"

interface UserProps {
  name: string
  email: string
  password: string
  createdAt: Date
}

class User {
  private props: UserProps
  private _id: string

  constructor(props: Replace<UserProps, { createdAt?: Date }>, id?: string) {
    this.props = { ...props, createdAt: props.createdAt ?? new Date() }
    this._id = id || randomUUID()
  }

  public get name(): string {
    return this.props.name
  }

  public set name(name: string) {
    this.props.name = name
  }

  public get password(): string {
    return this.props.password
  }

  public set password(password: string) {
    this.props.password = password
  }

  public get email(): string {
    return this.props.email
  }

  public set email(email: string) {
    this.props.email = email
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }

  public get id(): string {
    return this._id
  }
}

export { User }

import { User } from "src/modules/users/entities/User"

export class UserViewModel {
  static toHTTP({ id, email, name, createdAt }: User) {
    return {
      id,
      email,
      name,
      createdAt
    }
  }
}

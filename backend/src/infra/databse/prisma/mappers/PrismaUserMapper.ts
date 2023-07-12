import { User } from "src/modules/users/entities/User"
import { User as UserRaw } from "@prisma/client"

export class PrismaUserMapper {
  static toPrisma({ createdAt, email, id, name, password }: User) {
    return {
      createdAt,
      email,
      id,
      name,
      password
    }
  }

  static toDomain({ createdAt, email, id, name, password }: UserRaw) {
    return new User(
      {
        createdAt,
        email,
        name,
        password
      },
      id
    )
  }
}

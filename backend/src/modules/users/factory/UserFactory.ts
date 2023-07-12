import { User } from "../entities/User"

type Override = Partial<User>

export const makeUserFactory = ({ id = "", ...override }: Override) => {
  return new User(
    {
      name: "Vitor Lostada",
      email: "vitorlostada@hotmail.com",
      password: "123123",
      ...override
    },
    id
  )
}

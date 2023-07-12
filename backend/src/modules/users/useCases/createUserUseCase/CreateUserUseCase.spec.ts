import { User } from "../../entities/User"
import { UserRepositoryInMemory } from "../../repositories/UserRepositoryInMemory"
import { CreateUserUseCase } from "./CreateUserUseCase"
import { UserWithSameEmailException } from "../../exceptions/UserWithSameEmailException"

let createUserUseCase: CreateUserUseCase
let userRepositoryInMemory: UserRepositoryInMemory

describe("Create User", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory()
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory)
  })

  it("Should be able to create user", async () => {
    const newUser = await createUserUseCase.execute({
      email: "vitorlostada@hotmail.com",
      name: "Vitor Lostada da Cunha",
      password: "123123"
    })

    expect(newUser).toBeTruthy()
  })

  it("Should not be able to create user with same email", async () => {
    const user = new User({
      email: "vitorlostada@hotmail.com",
      name: "Vitor Lostada da Cunha",
      password: "123123"
    })

    userRepositoryInMemory.users = [user]

    expect(async () => {
      await createUserUseCase.execute({
        email: user.email,
        name: "Felipe Fonseca",
        password: "123123"
      })
    }).rejects.toBeInstanceOf(UserWithSameEmailException)
  })
})

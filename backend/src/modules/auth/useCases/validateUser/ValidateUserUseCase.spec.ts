import { ValidateUserUseCase } from "./ValidateUserUseCase"
import { UserRepositoryInMemory } from "../../../users/repositories/UserRepositoryInMemory"
import { User } from "../../../users/entities/User"
import { CreateUserUseCase } from "src/modules/users/useCases/createUserUseCase/CreateUserUseCase"
import { AuthValuesIncorrectException } from "src/infra/http/modules/auth/exceptions/AuthValuesIncorrectException"

let validateUserUseCase: ValidateUserUseCase
let createUserUseCase: CreateUserUseCase
let userRepositoryInMemory: UserRepositoryInMemory

describe("Validate User", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory()
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory)
    validateUserUseCase = new ValidateUserUseCase(userRepositoryInMemory)
  })

  it("Should be able to throw error when credentials incorrect", async () => {
    const user = new User({
      email: "vitorlostada@hotmail.com",
      name: "Vitor Lostada da Cunha",
      password: "123123"
    })

    userRepositoryInMemory.users = [user]

    expect(async () => {
      await validateUserUseCase.execute({
        email: user.email,
        password: "999999"
      })
    }).rejects.toBeInstanceOf(AuthValuesIncorrectException)

    expect(async () => {
      await validateUserUseCase.execute({
        email: "jorge@gmail.com",
        password: user.password
      })
    }).rejects.toBeInstanceOf(AuthValuesIncorrectException)
  })

  it("Should be able to return user if credentials are correct", async () => {
    await createUserUseCase.execute({
      email: "vitorlostada@hotmail.com",
      name: "Vitor Lostada da Cunha",
      password: "123123"
    })

    const result = await validateUserUseCase.execute({
      email: "vitorlostada@hotmail.com",
      password: "123123"
    })

    expect(result).toHaveProperty("id")
  })
})

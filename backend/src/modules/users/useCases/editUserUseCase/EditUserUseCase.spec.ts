import { UserRepositoryInMemory } from "../../repositories/UserRepositoryInMemory"
import { EditUserUseCase } from "./EditUserUseCase"
import { makeUserFactory } from "../../factory/UserFactory"

let editUserUseCase: EditUserUseCase
let userRepositoryInMemory: UserRepositoryInMemory

describe("Edit User", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory()
    editUserUseCase = new EditUserUseCase(userRepositoryInMemory)
  })

  it("Should be able to edit user", async () => {
    const user1 = makeUserFactory({ name: "teste" })
    userRepositoryInMemory.users = [user1]

    expect(user1.name).toEqual("teste")

    await editUserUseCase.execute({
      userId: user1.id,
      name: "Vitor Lostada da Cunha"
    })

    expect(user1.name).toEqual("Vitor Lostada da Cunha")
  })
})

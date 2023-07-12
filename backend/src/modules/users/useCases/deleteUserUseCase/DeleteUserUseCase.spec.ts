import { UserRepositoryInMemory } from "../../repositories/UserRepositoryInMemory"
import { makeUserFactory } from "../../factory/UserFactory"
import { DeleteUserUseCase } from "./DeleteUserUseCase"

let deleteUserUseCase: DeleteUserUseCase
let userRepositoryInMemory: UserRepositoryInMemory

describe("Delete User", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory()
    deleteUserUseCase = new DeleteUserUseCase(userRepositoryInMemory)
  })

  it("Should be able to delete user", async () => {
    const user1 = makeUserFactory({})
    userRepositoryInMemory.users = [user1]

    expect(userRepositoryInMemory.users.length).toEqual(1)

    await deleteUserUseCase.execute({
      userId: user1.id
    })

    expect(userRepositoryInMemory.users.length).toEqual(0)
  })
})

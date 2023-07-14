import { UserRepositoryInMemory } from "../../repositories/UserRepositoryInMemory"
import { makeUserFactory } from "../../factory/UserFactory"
import { FindManyUserUseCase } from "./FindManyUserUseCase"

let findManyUserUseCase: FindManyUserUseCase
let userRepositoryInMemory: UserRepositoryInMemory

describe("Delete User", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory()
    findManyUserUseCase = new FindManyUserUseCase(userRepositoryInMemory)
  })

  it("Should be able to delete user", async () => {
    const user1 = makeUserFactory({ name: "1" })
    const user2 = makeUserFactory({ name: "2" })
    userRepositoryInMemory.users = [user1, user2]

    const users = await findManyUserUseCase.execute()

    console.log(users)

    expect(users).toEqual([user1, user2])
  })
})

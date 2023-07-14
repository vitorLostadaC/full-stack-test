import { SignInUseCase } from "./SignInUseCase"
import { User } from "../../../users/entities/User"
import { JwtServiceMocked } from "src/infra/http/modules/auth/mocks/JwtServiceMocked"

let signInUseCase: SignInUseCase
let jwtServiceMocked: JwtServiceMocked

describe("Sign in", () => {
  beforeEach(async () => {
    jwtServiceMocked = new JwtServiceMocked()
    signInUseCase = new SignInUseCase(jwtServiceMocked)
  })

  it("Should be able to generate access_token", async () => {
    const userWithToken = await signInUseCase.execute(
      new User({
        email: "vitorlosta@hotmail.com",
        name: "Vitor",
        password: "123123"
      })
    )

    expect(userWithToken).toHaveProperty("access_token")
  })
})

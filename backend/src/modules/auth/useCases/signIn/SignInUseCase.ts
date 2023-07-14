import { Injectable } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { User } from "src/modules/users/entities/User"

export interface userPayload {
  sub: string
}

@Injectable()
export class SignInUseCase {
  constructor(private jwtService: JwtService) {}

  async execute(user: User) {
    const payload: userPayload = {
      sub: user.id
    }
    const jwtToken = this.jwtService.sign(payload)
    return {
      access_token: jwtToken,
      user
    }
  }
}

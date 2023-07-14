import { Injectable } from "@nestjs/common"
import { compare } from "bcrypt"
import { UserRepository } from "../../../users/repositories/UserRepository"
import { AuthValuesIncorrectException } from "src/infra/http/modules/auth/exceptions/AuthValuesIncorrectException"

interface ValidateUserUseCaseRequest {
  email: string
  password: string
}

@Injectable()
export class ValidateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, password }: ValidateUserUseCaseRequest) {
    const user = await this.userRepository.findByEmail(email)

    if (user) {
      const isPasswordMatched = await compare(password, user.password)

      if (isPasswordMatched) return user
    }

    throw new AuthValuesIncorrectException()
  }
}

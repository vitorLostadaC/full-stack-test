import { Injectable } from "@nestjs/common"
import { User } from "../../entities/User"
import { UserRepository } from "../../repositories/UserRepository"
import { hash } from "bcrypt"
import { UserWithSameEmailException } from "../../exceptions/UserWithSameEmailException"

interface CreateUserUseCaseRequest {
  name: string
  email: string
  password: string
}

@Injectable()
class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, name, password }: CreateUserUseCaseRequest) {
    const userWithSameEmail = await this.userRepository.findByEmail(email)

    if (userWithSameEmail) throw new UserWithSameEmailException()

    const user = new User({ email, name, password: await hash(password, 10) })

    await this.userRepository.create(user)

    return user
  }
}

export { CreateUserUseCase }

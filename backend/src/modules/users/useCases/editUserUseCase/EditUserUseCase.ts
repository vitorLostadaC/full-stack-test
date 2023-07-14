import { Injectable } from "@nestjs/common"
import { UserRepository } from "../../repositories/UserRepository"
import { UserWithSameEmailException } from "../../exceptions/UserWithSameEmailException"

interface EditUserUseCaseRequest {
  userId: string
  name: string
}

@Injectable()
export class EditUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ name, userId }: EditUserUseCaseRequest) {
    const currentUser = await this.userRepository.findById(userId)

    if (!currentUser) throw new UserWithSameEmailException()

    currentUser.name = name

    await this.userRepository.save(currentUser)

    return currentUser
  }
}

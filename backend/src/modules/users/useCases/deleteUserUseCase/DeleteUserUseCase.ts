import { Injectable } from "@nestjs/common"
import { UserRepository } from "../../repositories/UserRepository"

interface DeleteUserUseCaseRequest {
  userId: string
}

@Injectable()
export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ userId }: DeleteUserUseCaseRequest) {
    await this.userRepository.delete(userId)
  }
}

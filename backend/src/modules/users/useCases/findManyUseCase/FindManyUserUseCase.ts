import { Injectable } from "@nestjs/common"
import { UserRepository } from "../../repositories/UserRepository"

@Injectable()
export class FindManyUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute() {
    return await this.userRepository.findManyUser()
  }
}

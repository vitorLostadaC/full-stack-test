import { Module } from "@nestjs/common"
import { CreateUserUseCase } from "src/modules/users/useCases/createUserUseCase/CreateUserUseCase"
import { DeleteUserUseCase } from "src/modules/users/useCases/deleteUserUseCase/DeleteUserUseCase"
import { EditUserUseCase } from "src/modules/users/useCases/editUserUseCase/EditUserUseCase"
import { FindManyUserUseCase } from "src/modules/users/useCases/findManyUseCase/findManyUserUseCase"
import { UserController } from "./User.controller"

@Module({
  providers: [
    CreateUserUseCase,
    DeleteUserUseCase,
    EditUserUseCase,
    FindManyUserUseCase
  ],
  controllers: [UserController]
})
export class UserModule {}

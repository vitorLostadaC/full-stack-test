import { Module } from "@nestjs/common"
import { CreateUserUseCase } from "src/modules/users/useCases/createUserUseCase/CreateUserUseCase"
import { DeleteUserUseCase } from "src/modules/users/useCases/deleteUserUseCase/DeleteUserUseCase"
import { EditUserUseCase } from "src/modules/users/useCases/editUserUseCase/EditUserUseCase"
import { UserController } from "./User.controller"
import { DatabaseModule } from "src/infra/databse/Database.module"
import { FindManyUserUseCase } from "src/modules/users/useCases/findManyUseCase/FindManyUserUseCase"

@Module({
  imports: [DatabaseModule],
  providers: [
    CreateUserUseCase,
    DeleteUserUseCase,
    EditUserUseCase,
    FindManyUserUseCase
  ],
  controllers: [UserController]
})
export class UserModule {}

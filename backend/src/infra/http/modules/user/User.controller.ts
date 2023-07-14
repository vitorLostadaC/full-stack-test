import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards
} from "@nestjs/common"
import { CreateUserUseCase } from "src/modules/users/useCases/createUserUseCase/CreateUserUseCase"
import { DeleteUserUseCase } from "src/modules/users/useCases/deleteUserUseCase/DeleteUserUseCase"
import { EditUserUseCase } from "src/modules/users/useCases/editUserUseCase/EditUserUseCase"
import { FindManyUserUseCase } from "../../../../modules/users/useCases/findManyUseCase/FindManyUserUseCase"
import { CreateUserBody } from "./dtos/CreateUserBody"
import { EditUserBody } from "./dtos/EditUserBody"
import { UserViewModel } from "./viewModel/UserViewModel"
import { JwtAuthGuard } from "../auth/guards/JwtAuth.guard"
import { IsPublic } from "../auth/decorators/IsPublicDecorator"

@Controller("users")
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
    private editUserUseCase: EditUserUseCase,
    private findManyUserUseCase: FindManyUserUseCase
  ) {}

  @Post()
  @IsPublic()
  async createUser(@Body() body: CreateUserBody) {
    const { email, name, password } = body

    const user = await this.createUserUseCase.execute({
      email,
      name,
      password
    })

    return UserViewModel.toHTTP(user)
  }

  @Get()
  async findManyUser() {
    const users = await this.findManyUserUseCase.execute()

    return users.map(UserViewModel.toHTTP)
  }

  @Delete(":userId")
  async delete(@Param("userId") userId: string) {
    await this.deleteUserUseCase.execute({ userId })
  }

  @Put(":userId")
  async edit(@Param("userId") userId: string, @Body() body: EditUserBody) {
    const { name } = body
    await this.editUserUseCase.execute({
      name,
      userId
    })
  }
}

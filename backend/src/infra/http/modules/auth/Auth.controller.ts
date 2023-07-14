import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards
} from "@nestjs/common"
import { SignInUseCase } from "src/modules/auth/useCases/signIn/SignInUseCase"
import { UserViewModel } from "../user/viewModel/UserViewModel"
import { IsPublic } from "./decorators/IsPublicDecorator"
import { LocalAuthGuard } from "./guards/LocalAuth.guard"
import { AuthRequestModel } from "./models/AuthRequest"

@Controller()
export class AuthController {
  constructor(private signInUsecase: SignInUseCase) {}

  @Post("signIn")
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @IsPublic()
  async signIn(@Request() req: AuthRequestModel) {
    const { access_token, user } = await this.signInUsecase.execute(req.user)

    return {
      access_token,
      ...UserViewModel.toHTTP(user)
    }
  }
}

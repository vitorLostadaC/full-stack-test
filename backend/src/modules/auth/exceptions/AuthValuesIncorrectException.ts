import { HttpStatus } from "@nestjs/common"
import { AppException } from "src/exception/AppException"

export class AuthValuesIncorrectException extends AppException {
  constructor() {
    super({
      message: "Email ou senha incorreta",
      status: HttpStatus.UNAUTHORIZED
    })
  }
}

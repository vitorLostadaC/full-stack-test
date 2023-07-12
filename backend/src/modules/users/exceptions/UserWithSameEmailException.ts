import { HttpStatus } from "@nestjs/common"
import { AppException } from "src/exception/AppException"

export class UserWithSameEmailException extends AppException {
  constructor() {
    super({
      message: "E-mail já cadastrado",
      status: HttpStatus.CONFLICT
    })
  }
}

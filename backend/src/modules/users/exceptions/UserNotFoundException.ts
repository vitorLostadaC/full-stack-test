import { HttpStatus } from "@nestjs/common"
import { AppException } from "src/exception/AppException"

export class UserWithSameEmailException extends AppException {
  constructor() {
    super({
      message: "Usuário não encontrado",
      status: HttpStatus.NOT_FOUND
    })
  }
}

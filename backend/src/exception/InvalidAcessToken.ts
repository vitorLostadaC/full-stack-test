import { HttpStatus } from "@nestjs/common"
import { AppException } from "./AppException"

export class IncorrectValuesException extends AppException {
  constructor() {
    super({
      message: "Acess Token inválido",
      status: HttpStatus.BAD_REQUEST
    })
  }
}

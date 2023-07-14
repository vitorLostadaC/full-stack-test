import { HttpStatus } from "@nestjs/common"
import { AppException } from "./AppException"

export class IncorrectValuesException extends AppException {
  constructor(fields: { [key: string]: string }) {
    super({
      message: "Dados Inválidos",
      status: HttpStatus.BAD_REQUEST,
      fields
    })
  }
}

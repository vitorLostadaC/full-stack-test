import { Injectable, NestMiddleware } from "@nestjs/common"
import { validate } from "class-validator"
import { NextFunction, Request } from "express"
import { SignInBody } from "../dtos/SignInBody"
import { mapperClassValidateErrorToAppError } from "src/utils/mappers"
import { IncorrectValuesException } from "src/exception/IncorrectValuesException"

@Injectable()
export class LoginValidationMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const body = req.body

    const loginRequestBody = new SignInBody()
    loginRequestBody.email = body.email
    loginRequestBody.password = body.password

    const validations = await validate(loginRequestBody)

    if (validations.length) {
      throw new IncorrectValuesException(
        mapperClassValidateErrorToAppError(validations)
      )
    }

    next()
  }
}

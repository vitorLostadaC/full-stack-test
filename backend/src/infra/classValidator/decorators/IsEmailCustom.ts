import { registerDecorator, ValidationOptions, isEmail } from "class-validator"
import { ExceptionsMessage } from "../data/ExceptionsMessage"

export function IsEmailCustom(validationOptions?: ValidationOptions) {
  return function (object: NonNullable<unknown>, propertyName: string) {
    registerDecorator({
      name: "IsEmailCustom",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(email: string) {
          return isEmail(email)
        },
        defaultMessage() {
          return ExceptionsMessage.IsEmail
        }
      }
    })
  }
}

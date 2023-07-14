import {
  registerDecorator,
  ValidationOptions,
  minLength
} from "class-validator"
import { ExceptionsMessage } from "../data/ExceptionsMessage"

export function MinLengthCustom(
  minLengthNumber: number,
  validationOptions?: ValidationOptions
) {
  return function (object: NonNullable<unknown>, propertyName: string) {
    registerDecorator({
      name: "MinLengthCustom",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: string) {
          return minLength(value, minLengthNumber)
        },
        defaultMessage() {
          return ExceptionsMessage.MinLegth(minLengthNumber)
        }
      }
    })
  }
}

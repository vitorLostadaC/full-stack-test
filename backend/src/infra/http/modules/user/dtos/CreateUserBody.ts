import { IsEmailCustom } from "src/infra/classValidator/decorators/IsEmailCustom"
import { IsNotEmptyCustom } from "src/infra/classValidator/decorators/IsNotEmptyCustom"
import { MinLengthCustom } from "src/infra/classValidator/decorators/MinLengthCustom"

export class CreateUserBody {
  @IsNotEmptyCustom()
  name: string

  @IsNotEmptyCustom()
  @IsEmailCustom()
  email: string

  @IsNotEmptyCustom()
  @MinLengthCustom(6)
  password: string
}

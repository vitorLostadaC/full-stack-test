import { IsNotEmpty } from "class-validator"

export class EditUserBody {
  @IsNotEmpty()
  name: string
}

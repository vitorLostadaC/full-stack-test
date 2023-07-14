import { IsNotEmptyCustom } from "src/infra/classValidator/decorators/IsNotEmptyCustom"

export class EditUserBody {
  @IsNotEmptyCustom()
  name: string
}

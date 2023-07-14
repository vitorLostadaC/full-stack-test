import { Request } from "express"
import { User } from "src/modules/users/entities/User"

export interface AuthRequestModel extends Request {
  user: User
}

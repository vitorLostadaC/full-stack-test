import { UserSchema } from "../schemas/User.schema"
import { RoutePrivacity } from "./data/routesData"

interface ValidateRoutesPropsSchema {
  children: JSX.Element
  privacity: RoutePrivacity
}

interface RoutePropsSchema {
  children: JSX.Element
  currentUser?: UserSchema
}

export type { ValidateRoutesPropsSchema, RoutePropsSchema }

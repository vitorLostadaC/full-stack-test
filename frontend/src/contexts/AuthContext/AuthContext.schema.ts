import { ReactNode } from "react"
import { UserSchema } from "../../schemas/User.schema"

export interface AuthContextSchema {
  user: UserSchema | undefined
  saveAuthenticatedUser: (data: AuthSignInDataSchema) => void
  signOut: () => void
}

export interface AuthContextProviderPropSchema {
  children: ReactNode
}

export interface AuthSignInDataSchema {
  user: UserSchema
  access_token: string
}

export enum WebStorageKeys {}

import { createContext, useContext, useState } from "react"
import {
  AuthContextSchema,
  AuthContextProviderPropSchema,
  AuthSignInDataSchema
} from "./AuthContext.schema"
import { UserSchema } from "../../schemas/User.schema"
import { WebStorageKeys } from "../../data/webStorageKeys"

const getUserDataInWebStorage = (): UserSchema | undefined => {
  const user = localStorage.getItem(
    WebStorageKeys.User
  ) as unknown as UserSchema

  if (user) {
    return user
  }
}

export const removeAuthenticatedWebStorage = () => {
  localStorage.removeItem(WebStorageKeys.User)
  localStorage.removeItem(WebStorageKeys.AcessToken)
}

export const AuthContext = createContext({} as AuthContextSchema)

export const AuthContextProvider = ({
  children
}: AuthContextProviderPropSchema) => {
  const [user, setUser] = useState<UserSchema | undefined>(
    getUserDataInWebStorage
  )

  const saveAuthenticatedUser = ({
    access_token,
    user
  }: AuthSignInDataSchema) => {
    setUser(user)
    localStorage.setItem(WebStorageKeys.User, JSON.stringify(user))
    localStorage.setItem(WebStorageKeys.AcessToken, access_token)
  }

  const signOut = () => {
    removeAuthenticatedWebStorage()
    setUser(undefined)
  }

  return (
    <AuthContext.Provider value={{ user, saveAuthenticatedUser, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)

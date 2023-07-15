import { useLocation, Navigate } from "react-router-dom"
import { useAuthContext } from "../contexts/AuthContext/AuthContext"
import {
  ValidateRoutesPropsSchema,
  RoutePropsSchema
} from "./ValidateRoute.schema"
import { RoutePrivacity } from "./data/routesData"

const ValidateRoute = ({
  children,

  privacity
}: ValidateRoutesPropsSchema) => {
  const { user } = useAuthContext()

  if (privacity === RoutePrivacity.Private) {
    return <PrivateRoute currentUser={user}>{children}</PrivateRoute>
  }
  return <PublicRoute currentUser={user}>{children}</PublicRoute>
}

const PrivateRoute = ({ children, currentUser }: RoutePropsSchema) => {
  const location = useLocation()
  if (!currentUser)
    return (
      <Navigate
        state={{
          from: location.pathname
        }}
        to={{
          pathname: "/login"
        }}
      />
    )

  return children
}

const PublicRoute = ({ children, currentUser }: RoutePropsSchema) => {
  const location = useLocation()

  return !currentUser ? (
    children
  ) : (
    <Navigate
      to={{
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        pathname: location.state?.from || "/"
      }}
    />
  )
}

export { ValidateRoute }

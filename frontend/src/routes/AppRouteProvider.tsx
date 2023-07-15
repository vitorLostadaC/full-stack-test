import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { LoginPage } from "../pages/Login/LoginPage"
import { HomePage } from "../pages/Home/HomePage"
import { ValidateRoute } from "./ValidateRoute"
import { RoutePrivacity } from "./data/routesData"

export const AppRouterProvider = () => {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: "*",
          element: <Navigate to={"/login"} />
        },
        {
          path: "/login",
          element: (
            <ValidateRoute privacity={RoutePrivacity.Public}>
              <LoginPage />
            </ValidateRoute>
          )
        },
        {
          path: "/",
          element: (
            <ValidateRoute privacity={RoutePrivacity.Private}>
              <HomePage />
            </ValidateRoute>
          )
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

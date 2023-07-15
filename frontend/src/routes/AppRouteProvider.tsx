import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { LoginPage } from "../pages/Login/LoginPage"
import { HomePage } from "../pages/Home/HomePage"

export const AppRouterProvider = () => {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: "/login",
          element: <LoginPage />
        },
        {
          path: "/",
          element: <HomePage />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

import { toast } from "react-toastify"
import { ExceptionApiResponseSchema } from "./api.schema"
import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError(error, variables, context) {
        const message = (error as ExceptionApiResponseSchema).message
        toast.error(message)
      }
    }
  }
})

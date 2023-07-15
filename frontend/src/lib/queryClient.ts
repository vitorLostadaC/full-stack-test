import { QueryClient } from "react-query"
import { toast } from "react-toastify"
import { ExceptionApiResponseSchema } from "./api.schema"

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

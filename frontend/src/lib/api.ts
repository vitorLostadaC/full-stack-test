/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios, { AxiosError, AxiosResponse } from "axios"
import { removeAuthenticatedWebStorage } from "../contexts/AuthContext/AuthContext"

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("notes.token")
  if (token) {
    // TODO: axios bug workaround, ref: https://github.com/axios/axios/issues/5034
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`
    }
  }

  return config
})

api.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response.data
  },
  (exception: AxiosError) => {
    if (exception.response?.status === 401) removeAuthenticatedWebStorage()

    return exception.response?.data
  }
)

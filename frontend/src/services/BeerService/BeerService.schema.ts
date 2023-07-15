import { Beer } from "../../schemas/Beer.schema"

export interface GetBeersParamsSchema {
  perPage: number
  page: number
}

export type GetBeersResponseSchema = Beer[]

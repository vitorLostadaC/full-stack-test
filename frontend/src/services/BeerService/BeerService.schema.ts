import { Beer } from "../../schemas/Beer.schema"

export interface GetBeersParamsSchema {
  per_page: number
  page: number
}

export type GetBeersResponseSchema = Beer[]

import { api } from "../../lib/api"
import {
  GetBeersParamsSchema,
  GetBeersResponseSchema
} from "./BeerService.schema"

export const GET_BEERS = "getBeers"
export const getBeers = (
  params: GetBeersParamsSchema
): Promise<GetBeersResponseSchema> => api.get("/beers", { params })

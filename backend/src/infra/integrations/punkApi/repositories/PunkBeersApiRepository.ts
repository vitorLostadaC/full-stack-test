import axios, { AxiosInstance } from "axios"
import { GetBeersUseCaseRequest } from "src/modules/beers/useCases/getBeers/GetBeersUseCase"
import { BeersRepository } from "src/modules/beers/repositories/BeersRepository"
import { Beer } from "../schemas/Beer"

export class PunkBeersApiRepository implements BeersRepository {
  private readonly api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: "https://api.punkapi.com/v2/beers"
    })
  }

  async findManyBeers({ page, perPage }: GetBeersUseCaseRequest) {
    const beers = await this.api.get<Beer>("", {
      params: {
        page,
        perPage
      }
    })

    return beers.data
  }
}

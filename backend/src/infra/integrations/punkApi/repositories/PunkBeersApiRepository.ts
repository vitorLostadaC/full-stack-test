import axios, { AxiosInstance } from "axios"
import { BeersRepository } from "src/modules/beers/repositories/BeersRepository"
import { Beer } from "../schemas/Beer"
import { Injectable } from "@nestjs/common"
import { findManyBeersRequest } from "src/modules/beers/useCases/findManyBeersUseCase/findManyBeersUseCase"

@Injectable()
export class PunkBeersApiRepository implements BeersRepository {
  private readonly api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: "https://api.punkapi.com/v2/beers"
    })
  }

  async findManyBeers({ page, per_page }: findManyBeersRequest) {
    const beers = await this.api.get<Beer>("", {
      params: {
        page,
        per_page
      }
    })

    return beers.data
  }
}

import { Injectable } from "@nestjs/common"
import { BeersRepository } from "../../repositories/BeersRepository"

export interface findManyBeersRequest {
  per_page?: number
  page?: number
}

@Injectable()
export class findManyBeersUseCase {
  constructor(private beersRepository: BeersRepository) {}

  async execute({ page, per_page }: findManyBeersRequest) {
    const beers = await this.beersRepository.findManyBeers({
      page,
      per_page
    })

    return beers
  }
}

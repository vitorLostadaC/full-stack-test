import { Injectable } from "@nestjs/common"
import { BeersRepository } from "../../repositories/BeersRepository"

export interface GetBeersUseCaseRequest {
  per_page?: number
  page?: number
}

@Injectable()
export class GetBeersUseCase {
  constructor(private beersRepository: BeersRepository) {}

  async execute({ page, per_page }: GetBeersUseCaseRequest) {
    const beers = await this.beersRepository.findManyBeers({
      page,
      per_page
    })

    return beers
  }
}

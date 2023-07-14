import { BeersRepository } from "../../repositories/BeersRepository"

export interface GetBeersUseCaseRequest {
  perPage?: number
  page?: number
}

export class GetBeersUseCase {
  constructor(private beersRepository: BeersRepository) {}

  async execute({ page, perPage }: GetBeersUseCaseRequest) {
    const beers = await this.beersRepository.findManyBeers({
      page,
      perPage
    })

    return beers
  }
}

import { Beer } from "src/infra/integrations/punkApi/schemas/Beer"
import { GetBeersUseCaseRequest } from "../useCases/getBeers/GetBeersUseCase"

export abstract class BeersRepository {
  abstract findManyBeers(request: GetBeersUseCaseRequest): Promise<Beer>
}

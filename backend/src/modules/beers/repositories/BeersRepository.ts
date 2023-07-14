import { Beer } from "src/infra/integrations/punkApi/schemas/Beer"
import { findManyBeersRequest } from "../useCases/findManyBeersUseCase/findManyBeersUseCase"

export abstract class BeersRepository {
  abstract findManyBeers(request: findManyBeersRequest): Promise<Beer>
}

import { Controller, Get, Query, UseGuards } from "@nestjs/common"
import { JwtAuthGuard } from "../auth/guards/JwtAuth.guard"
import { findManyBeersUseCase } from "../../../../modules/beers/useCases/findManyBeersUseCase/findManyBeersUseCase"

@UseGuards(JwtAuthGuard)
@Controller("/beers")
export class BeersController {
  constructor(private getBeersUseCase: findManyBeersUseCase) {}

  @Get()
  async findMany(
    @Query("page") page?: string,
    @Query("per_page") per_page?: string
  ) {
    const beers = this.getBeersUseCase.execute({
      page: Number(page) || undefined,
      per_page: Number(per_page) || undefined
    })

    return beers
  }
}

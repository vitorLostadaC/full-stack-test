import { Controller, Get, Query, UseGuards } from "@nestjs/common"
import { JwtAuthGuard } from "../auth/guards/JwtAuth.guard"
import { GetBeersUseCase } from "../../../../modules/beers/useCases/getBeers/GetBeersUseCase"

@UseGuards(JwtAuthGuard)
@Controller("/beers")
export class BeersController {
  constructor(private getBeersUseCase: GetBeersUseCase) {}

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

import { Module } from "@nestjs/common"
import { PunkBeersApiRepository } from "./punkApi/repositories/PunkBeersApiRepository"
import { BeersRepository } from "src/modules/beers/repositories/BeersRepository"

@Module({
  providers: [
    PunkBeersApiRepository,
    {
      provide: BeersRepository,
      useClass: PunkBeersApiRepository
    }
  ],
  exports: [BeersRepository]
})
export class IntegrationsModule {}

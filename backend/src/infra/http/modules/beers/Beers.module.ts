import { Module } from "@nestjs/common"
import { BeersController } from "./Beers.controller"
import { IntegrationsModule } from "src/infra/integrations/Integrations.module"
import { GetBeersUseCase } from "src/modules/beers/useCases/getBeers/GetBeersUseCase"

@Module({
  imports: [IntegrationsModule],
  controllers: [BeersController],
  providers: [GetBeersUseCase]
})
export class BeersModule {}

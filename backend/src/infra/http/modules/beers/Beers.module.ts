import { Module } from "@nestjs/common"
import { BeersController } from "./Beers.controller"
import { IntegrationsModule } from "src/infra/integrations/Integrations.module"
import { findManyBeersUseCase } from "src/modules/beers/useCases/findManyBeersUseCase/findManyBeersUseCase"

@Module({
  imports: [IntegrationsModule],
  controllers: [BeersController],
  providers: [findManyBeersUseCase]
})
export class BeersModule {}

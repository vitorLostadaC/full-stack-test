import { Module } from "@nestjs/common"
import { DatabaseModule } from "./infra/databse/Database.module"
import { UserModule } from "./infra/http/modules/user/User.module"

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [],
  providers: []
})
export class AppModule {}

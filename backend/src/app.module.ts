import { Module } from "@nestjs/common"
import { DatabaseModule } from "./infra/databse/Database.module"
import { UserModule } from "./infra/http/modules/user/User.module"
import { AuthModule } from "./infra/http/modules/auth/auth.module"
import { APP_GUARD } from "@nestjs/core"
import { JwtAuthGuard } from "./infra/http/modules/auth/guards/JwtAuth.guard"

@Module({
  imports: [DatabaseModule, UserModule, AuthModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ]
})
export class AppModule {}

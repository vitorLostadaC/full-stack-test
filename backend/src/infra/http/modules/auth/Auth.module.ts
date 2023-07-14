import { Module, MiddlewareConsumer } from "@nestjs/common"
import { JwtModule } from "@nestjs/jwt"
import { DatabaseModule } from "src/infra/databse/Database.module"
import { JwtStrategy } from "src/modules/auth/strategies/Jwt.strategy"
import { LocalStrategy } from "src/modules/auth/strategies/Local.strategy"
import { SignInUseCase } from "src/modules/auth/useCases/signIn/SignInUseCase"
import { ValidateUserUseCase } from "src/modules/auth/useCases/validateUser/ValidateUserUseCase"
import { AuthController } from "./Auth.controller"
import { LoginValidationMiddleware } from "./middlewares/SignInValidate.middleware"

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN }
    })
  ],
  controllers: [AuthController],
  providers: [LocalStrategy, ValidateUserUseCase, SignInUseCase, JwtStrategy]
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginValidationMiddleware).forRoutes("/signIn")
  }
}

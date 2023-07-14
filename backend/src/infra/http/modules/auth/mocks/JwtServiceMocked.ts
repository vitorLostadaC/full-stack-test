import { JwtService } from "@nestjs/jwt"

export class JwtServiceMocked extends JwtService {
  sign(): string {
    return "false string"
  }
}

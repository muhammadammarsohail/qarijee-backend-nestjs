import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { SignupCredentialsDto } from "src/dto/signupCredentials.dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/signup")
  async signUp(@Body(ValidationPipe) authCredentialsDto: SignupCredentialsDto) {
    return await this.authService.signUp(authCredentialsDto);
  }

  @Post("/login")
  async login() {}
}

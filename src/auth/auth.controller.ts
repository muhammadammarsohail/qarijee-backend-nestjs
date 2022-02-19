import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { LoginCredentialsDto } from "src/dto/loginCredentials.dto";
import { SignupCredentialsDto } from "src/dto/signupCredentials.dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/signup")
  async signUp(
    @Body(ValidationPipe) signupCredentialsDto: SignupCredentialsDto
  ) {
    return await this.authService.signUp(signupCredentialsDto);
  }

  @Post("/login")
  async login(@Body(ValidationPipe) loginCredentialsDto: LoginCredentialsDto) {
    return await this.authService.login(loginCredentialsDto);
  }
}

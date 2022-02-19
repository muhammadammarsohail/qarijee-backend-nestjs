import { Injectable } from "@nestjs/common";
// import { InjectRepository } from "@nestjs/typeorm";
import { LoginCredentialsDto } from "src/dto/loginCredentials.dto";
import { SignupCredentialsDto } from "src/dto/signupCredentials.dto";
// import { TeacherRepository } from 'src/teacher/teacher.repository';

@Injectable()
export class AuthService {
  // constructor (
  //     @InjectRepository(TeacherRepository)
  //     private teacherRepository: TeacherRepository
  // ) {}
  async signUp(authCredentialsDto: SignupCredentialsDto) {
    //   return await this.teacherRepository.signUp(authCredentialsDto);
  }

  async login(loginCredentialDto: LoginCredentialsDto) {}
}

import { Injectable } from "@nestjs/common";
import { LoginCredentialsDto } from "src/dto/loginCredentials.dto";
import { SignupCredentialsDto } from "src/dto/signupCredentials.dto";
import { db } from "../db";
// import { TeacherRepository } from 'src/teacher/teacher.repository';

@Injectable()
export class AuthService {
  private db = db;
  async signUp(signupCredentialsDto: SignupCredentialsDto) {
    this.db.student = [...this.db.student, signupCredentialsDto];
    //   return await this.teacherRepository.signUp(authCredentialsDto);
  }

  async login(loginCredentialDto: LoginCredentialsDto) {}
}

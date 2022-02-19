import { Injectable } from "@nestjs/common";
import { LoginCredentialsDto } from "src/dto/loginCredentials.dto";
import { db } from "../db";
import { SALT } from "./salt";
// import { TeacherRepository } from 'src/teacher/teacher.repository';

@Injectable()
export class AuthService {
  private db = db;

  // async signUp(signupCredentialsDto: SignUpCredentialsDto) {
  //   this.db.student = [...this.db.student, signupCredentialsDto];
  //   //   return await this.teacherRepository.signUp(authCredentialsDto);
  // }

  async login(loginCredentialDto: LoginCredentialsDto) {

  }

  // signJWT(email: string, password: string) {
  //   let jwt: string[] = []
  //   const saltChar: string[] = [...SALT];
  //   const emailChar: string[] = [...email];
  //   const passwordChar: string[] = [...password];
  //   for (let i = 0; i < saltChar.length; i++) {
  //     jwt.push(saltChar[i])
  //     if (emailChar[i]) {
  //       jwt.push(emailChar[i])
  //     }
  //     if (passwordChar[i]) {
  //       jwt.push(emailChar[i])
  //     }
  //   }
  //   return jwt;
  // }
}


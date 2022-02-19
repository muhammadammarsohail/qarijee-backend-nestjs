import { BadRequestException, Injectable } from "@nestjs/common";
import { db } from "src/db";
import { LoginCredentialsDto } from "src/dto/loginCredentials.dto";
import { signJwt } from "src/utils/utils";

@Injectable()
export class StudentService {
  private db = db;

  async getAllStudents() {
    return this.db.student;
  }

  async login(loginCredentialDto: LoginCredentialsDto) {
    const jwt = signJwt(loginCredentialDto.email, loginCredentialDto.password);
    let [student] = db.student.filter(adm => adm.jwt === jwt);
    if (!student) {
      throw new BadRequestException('User does not exist.')
    }
    return student;
  }
}

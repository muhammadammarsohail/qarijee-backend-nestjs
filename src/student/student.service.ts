import { BadRequestException, Injectable } from "@nestjs/common";
import { db, Student } from "src/db";
import { LoginCredentialsDto } from "src/dto/loginCredentials.dto";
import { studentSignUpCredentialsDto } from "src/dto/signupCredentials.dto";
import { signJwt } from "src/utils/utils";

@Injectable()
export class StudentService {
  private db = db;

  async getAllStudents() {
    return this.db.student;
  }

  async getStudentByEmail(email: string) {
    const [student] = this.db.student.filter(student => student.email === email);
    return student;
  }

  async login(loginCredentialDto: LoginCredentialsDto) {
    const jwt = signJwt(loginCredentialDto.email, loginCredentialDto.password);
    let [student] = db.student.filter(adm => adm.jwt === jwt);
    if (!student) {
      throw new BadRequestException('User does not exist.')
    }
    return student;
  }

  async signUp(signUpCredentials: studentSignUpCredentialsDto) {
    const studentExists = [...db.teacher,...db.student,...db.admin].findIndex(student => student.email === signUpCredentials.email);
    if (studentExists!=-1) {
        throw new BadRequestException('Account already exists.')
    }
    const jwt: string = signJwt(signUpCredentials.email, signUpCredentials.password);
    let student = new Student();
    student.age = signUpCredentials.age;
    student.city = signUpCredentials.city;
    student.country = signUpCredentials.country;
    student.email = signUpCredentials.email;
    student.gender = signUpCredentials.gender;
    student.jwt = jwt;
    student.name = signUpCredentials.name;
    
    db.student.push(student);
    console.log(student);
    
    return student;
}
}

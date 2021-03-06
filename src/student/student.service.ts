import { BadRequestException, Injectable } from "@nestjs/common";
import { db, Student } from "src/db";
import { LoginCredentialsDto } from "src/dto/loginCredentials.dto";
import { studentSignUpCredentialsDto } from "src/dto/signupCredentials.dto";
import { UpdateStudent } from "src/dto/student.dto";
import { Role } from "src/enum/enums";
import { authenticate, signJwt } from "src/utils/utils";

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

  async delete(email: string, token: string) {
    authenticate([Role.admin], token)

    const studentIndex = db.student.findIndex(student => student.email === email);
    db.student.splice(studentIndex, 1);
    return 'Student removed successfully.'
  }

  async updateStudent(email: string, input: UpdateStudent.UpdateInput) {
    const index = db.student.findIndex(student => student.email === email);
    if(index < 0) {
        throw new BadRequestException("Student Doesn't exist")
    }
    let updatedStudent = db.student[index];
    updatedStudent.name = input.name || updatedStudent.name;
    updatedStudent.age = input.age || updatedStudent.age;
    updatedStudent.country = input.country || updatedStudent.country;
    updatedStudent.city = input.city || updatedStudent.city;

    if (input.password) {
        const jwt: string = signJwt(email, input.password);
        updatedStudent.jwt = jwt;
    }

    db.student[index] = updatedStudent;
    return updatedStudent;
  }
}

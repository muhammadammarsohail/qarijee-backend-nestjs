import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { AdminService } from "src/admin/admin.service";
import { LoginCredentialsDto } from "src/dto/loginCredentials.dto";
import { adminSignUpCredentialsDto, studentSignUpCredentialsDto, teacherSignUpCredentialsDto } from "src/dto/signupCredentials.dto";
import { StudentService } from "src/student/student.service";
import { TeacherService } from "src/teacher/teacher.service";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private adminService: AdminService,
    private teacherService: TeacherService,
    private studentService: StudentService,
  ) {}


  @Post("/login/admin")
  async loginAdmin(@Body(ValidationPipe) loginCredentialsDto: LoginCredentialsDto) {
    return await this.adminService.login(loginCredentialsDto);
  }
  
  @Post("/login/teacher")
  async loginTeacher(@Body(ValidationPipe) loginCredentialsDto: LoginCredentialsDto) {
    return await this.teacherService.login(loginCredentialsDto);
  }

  @Post("/login/student")
  async loginStudent(@Body(ValidationPipe) loginCredentialsDto: LoginCredentialsDto) {
    return await this.studentService.login(loginCredentialsDto);
  }

  @Post("/signup/admin")
  async signUpAdmin(
    @Body(ValidationPipe) signupCredentialsDto: adminSignUpCredentialsDto
  ) {
    return await this.adminService.signUp(signupCredentialsDto);
  }

  @Post("/signup/teacher")
  async signUpTeacher(@Body(ValidationPipe) signupCredentialsDto: teacherSignUpCredentialsDto) {
    return await this.teacherService.signUp(signupCredentialsDto);
  }

  @Post("/signup/student")
  async signUpStudent(
    @Body(ValidationPipe) signupCredentialsDto: studentSignUpCredentialsDto
  ) {
    return await this.studentService.signUp(signupCredentialsDto);
  }

}

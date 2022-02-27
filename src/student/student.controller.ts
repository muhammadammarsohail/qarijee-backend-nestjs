import { Body, Controller, Delete, Get, Param, Post, Put, Request, ValidationPipe } from "@nestjs/common";
import { UpdateStudent } from "src/dto/student.dto";
import { StudentService } from "./student.service";

@Controller("student")
export class StudentController {
  constructor(private studentService: StudentService) {}
  @Get('all')
  async getAllStudents() {
    return this.studentService.getAllStudents();
  }

  @Post()
  async postCreateStudent() {}

  @Get("/:email")
  async getStudentByEmail(
    @Param('email') email: string
  ) {
    return this.studentService.getStudentByEmail(email);
  }

  @Delete("/:email")
  async deleteStudent(
    @Param('email') email: string,
    @Request() req: any
  ) {
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1];
    return this.studentService.delete(email, token);
  }

  @Put("/:email")
  async updateStudent(
    @Param('email') email: string,
    @Body(ValidationPipe) input: UpdateStudent.UpdateInput
  ) {
    return await this.studentService.updateStudent(email, input);
  }
}

import { Controller, Delete, Get, Param, Post, Put, Request } from "@nestjs/common";
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

  @Put("/:id")
  async updateStudent() {}
}

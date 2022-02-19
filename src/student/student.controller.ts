import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { StudentService } from "./student.service";

@Controller("student")
export class StudentController {
  constructor(private studentService: StudentService) {}
  @Get()
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

  @Delete("/:id")
  async deleteStudent() {}

  @Put("/:id")
  async updateStudent() {}
}

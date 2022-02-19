import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
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

  @Get("/:id")
  async getStudentById() {}

  @Delete("/:id")
  async deleteStudent() {}

  @Put("/:id")
  async updateStudent() {}
}

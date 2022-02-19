import { Controller, Delete, Get, Param, Post, Put, Req, Request } from "@nestjs/common";
import { TeacherService } from "./teacher.service";

@Controller("teacher")
export class TeacherController {

  constructor(
    private teacherService: TeacherService,
  ) {}

  @Get('/me') 
  async getMyDetails(
    @Request() req: any
  ) {
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1];
    return this.teacherService.getMyDetails(token);
  }

  @Get()
  async getAllTeachers() {}

  @Get("/:id")
  async getTeacherById() {}

  @Post()
  async postCreateTeacher() {}

  @Delete("/:email")
  async deleteTeacher(
    @Param('email') email: string
  ) {

  }

  @Put("/:id")
  async updateTeacher() {}
}

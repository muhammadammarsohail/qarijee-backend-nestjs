import { Body, Controller, Delete, Get, Param, Post, Put, Req, Request, ValidationPipe } from "@nestjs/common";
import { UpdateTeacher } from "src/dto/teacher.dto";
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

  @Get('/top') 
  async getTopTeachers(
    @Request() req: any
  ) {
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1];
    return this.teacherService.getTopTeachers(token);
  }

  @Get('/all')
  async getAllTeachers() {
    return await this.teacherService.getAllTeachers();
  }

  @Get("/:email")
  async getTeacherByEmail(
    @Param("email") email: string
  ) {
    return this.teacherService.getTeacherByEmail(email);
  }

  @Post()
  async postCreateTeacher() {}

  @Delete("/:email")
  async deleteTeacher(
    @Param('email') email: string
  ) {
    return this.teacherService.delete(email);
  }

  @Put("/:email")
  async updateTeacher(
    @Param('email') email: string,
    @Body(ValidationPipe) input: UpdateTeacher.UpdateInput
  ) {
    return this.teacherService.updateTeacher(email, input);
  }
}

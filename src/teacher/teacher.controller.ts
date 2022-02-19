import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller("teacher")
export class TeacherController {
  @Get()
  async getAllTeachers() {}

  @Get("/:id")
  async getTEacherById() {}

  @Post()
  async postCreateTeacher() {}

  @Delete("/:id")
  async deleteTeacher() {}

  @Put("/:id")
  async updateTeacher() {}
}

import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller("course")
export class CourseController {
  @Get()
  async getAllCourses() {}

  @Get("/:id")
  async getCourseById() {}

  @Post("/:id")
  async postCreateCourse() {}

  @Put("/:id")
  async updateCourse() {}

  @Delete("/:id")
  async deleteCourse() {}
}

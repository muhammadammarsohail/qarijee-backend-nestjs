import { Controller, Delete, Get, Post, Put, Request } from "@nestjs/common";
import { CourseService } from "./course.service";

@Controller("course")
export class CourseController {
  constructor(
    private courseService: CourseService,
  ) {}

  @Get('names')
  async getCourseNames(
    @Request() req: any
  ) {
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1];
    return this.courseService.getCourseNames(token);
  }

  @Get("all")
  async getAllCourses(
    @Request() req: any
  ) {
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1];
    return this.courseService.getAllCourses(token);
  }

  @Post("/:id")
  async postCreateCourse() {}

  @Put("/:id")
  async updateCourse() {}

  @Delete("/:id")
  async deleteCourse() {}
}

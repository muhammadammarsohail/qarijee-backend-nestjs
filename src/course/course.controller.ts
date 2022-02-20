import { Controller, Delete, Get, Param, Post, Put, Request } from "@nestjs/common";
import { CourseEnum } from "src/enum/courseEnum";
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

  @Get('all')
  async getAllCourses(
    @Request() req: any
  ) {
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1];
    return this.courseService.getAllCourses(token);
  }

  @Get('/:name')
  async getCourseByName(
    @Param('name') name: CourseEnum,
    @Request() req: any
  ) {
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1];
    return this.courseService.getCourseByName(name, token);
  }

  @Post("/:id")
  async postCreateCourse() {}

  @Put("/:id")
  async updateCourse() {}

  @Delete("/:id")
  async deleteCourse() {}
}

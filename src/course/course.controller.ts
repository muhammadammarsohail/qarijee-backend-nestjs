import { Body, Controller, Delete, Get, Param, Post, Put, Request, ValidationPipe } from "@nestjs/common";
import { Course } from "src/db";
import { UpdateCourse } from "src/dto/course.dto";
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

  @Post("/create")
  async CreateCourse(
    @Body(ValidationPipe) course: Course,
    @Request() req: any
  ) {
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1];
    return await this.courseService.createCourse(course, token);
  }

  @Put("/:name")
  async updateCourse(
    @Param('name') name: string,
    @Body(ValidationPipe) course: UpdateCourse,
    @Request() req: any
  ) {
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1];
    return this.courseService.updateCourse(name, course, token);
  }

  @Delete("/:name")
  async deleteCourse(
    @Param('name') name: string,
    @Request() req: any
  ) {
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1];
    return this.courseService.delete(name, token);
  }
}

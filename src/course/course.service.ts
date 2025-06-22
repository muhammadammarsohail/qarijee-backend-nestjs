import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from '../entities/course.entity';
import { Teacher } from '../entities/teacher.entity';
import { UpdateCourse } from 'src/dto/course.dto';
import { CourseEnum } from 'src/enum/courseEnum';
import { Role } from 'src/enum/enums';
import { authenticate } from 'src/utils/utils';

@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(Course)
        private courseRepository: Repository<Course>,
        @InjectRepository(Teacher)
        private teacherRepository: Repository<Teacher>,
    ) {}

    async getCourseNames(token: string) {
        // authenticate([Role.admin, Role.student, Role.teacher], token)

        const deleted: string = 'DELETED';
        const courseNames = Object.values(CourseEnum);
        const undeletedCourseNames = courseNames.filter(courseName => courseName !== deleted);
        return undeletedCourseNames;
    }

    async getAllCourses() {        
        return await this.courseRepository.find();
    }

    async getCourseByName(courseName: CourseEnum, token: string) {
        // authenticate([Role.admin, Role.student, Role.teacher], token)

        const course = await this.courseRepository.findOne({
            where: { name: courseName }
        });

        if (!course) {
            throw new BadRequestException("Course not found");
        }

        const teachers = await this.teacherRepository.find({
            where: { courses: courseName.toString() }
        });

        return {
            ...course,
            teachers
        };
    }

    async createCourse(courseInput: any, token: string) {
        authenticate([Role.admin], token);

        const existingCourse = await this.courseRepository.findOne({
            where: { name: courseInput.name }
        });

        if (existingCourse) {
            throw new BadRequestException("Course already exists");
        }

        const course = this.courseRepository.create({
            name: courseInput.name,
            description: courseInput.description,
            books: courseInput.books
        });

        return await this.courseRepository.save(course);
    }

    async updateCourse(courseName: string, courseInput: UpdateCourse, token: string) {
        authenticate([Role.admin], token);        

        const course = await this.courseRepository.findOne({
            where: { name: courseName as CourseEnum }
        });

        if (!course) {
            throw new BadRequestException("Course doesn't exist");
        }

        course.description = courseInput.description;
        course.books = courseInput.books;

        return await this.courseRepository.save(course);
    }

    async delete(name: string, token: string) {
        authenticate([Role.admin], token);        

        const course = await this.courseRepository.findOne({
            where: { name: name as CourseEnum }
        });

        if (!course) {
            throw new BadRequestException("Course doesn't exist");
        }

        await this.courseRepository.remove(course);
        return 'Course removed successfully.';
    }
}

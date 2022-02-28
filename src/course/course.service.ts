import { BadRequestException, Injectable } from '@nestjs/common';
import { Course, db } from 'src/db';
import { UpdateCourse } from 'src/dto/course.dto';
import { CourseEnum } from 'src/enum/courseEnum';
import { Role } from 'src/enum/enums';
import { authenticate } from 'src/utils/utils';

@Injectable()
export class CourseService {

    async getCourseNames(token: string) {
        // authenticate([Role.admin, Role.student, Role.teacher], token)

        const deleted: string = 'DELETED';

        const courseNames = Object.values(CourseEnum)
        const undeletedCourseNames = courseNames.filter(courseName => courseName !== deleted)
        return undeletedCourseNames;
    }

    async getAllCourses() {        
        return db.course;
    }

    async getCourseByName(courseName: CourseEnum, token: string) {
        // authenticate([Role.admin, Role.student, Role.teacher], token)

        let [course] = db.course.filter(course => course.name === courseName);
        const teachers = db.teacher.filter(teacher => teacher.courses.includes(courseName));     
        course['teachers'] = teachers;
        return course;
    }

    async createCourse(courseInput: Course, token: string) {
        authenticate([Role.admin], token);

        const courseIndex = db.course.findIndex(course => course.name == courseInput.name);

        if (courseIndex >= 0) {
            throw new BadRequestException("Course already exists")
        }

        let course = new Course();
        course.name = courseInput.name;
        course.description = courseInput.description;
        course.books = courseInput.books;

        CourseEnum[courseInput.name.toString()] = courseInput.name;

        db.course.push(course);
        return course;
    }

    async updateCourse(courseName: string, courseInput: UpdateCourse, token: string) {
        authenticate([Role.admin], token);        

        const courseIndex = db.course.findIndex(course => course.name == courseName);

        if (courseIndex < 0) {
            throw new BadRequestException("Course doesn't exist")
        }

        db.course[courseIndex].description = courseInput.description;
        db.course[courseIndex].books = courseInput.books;

        return db.course[courseIndex];        
    }

    async delete(name: string, token: string) {
        authenticate([Role.admin], token);        

        const courseIndex = db.course.findIndex(course => course.name === name);

        if(courseIndex < 0) {
            throw new BadRequestException("Course doesn't exist")
        }

        CourseEnum[name] = 'DELETED'

        db.course.splice(courseIndex, 1);
        return 'Course removed successfully.'
    }
}

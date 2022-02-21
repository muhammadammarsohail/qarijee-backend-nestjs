import { Injectable } from '@nestjs/common';
import { db } from 'src/db';
import { CourseEnum } from 'src/enum/courseEnum';
import { Role } from 'src/enum/enums';
import { authenticate } from 'src/utils/utils';

@Injectable()
export class CourseService {

    async getCourseNames(token: string) {
        authenticate([Role.admin, Role.student, Role.teacher], token)

        const courseNames = Object.values(CourseEnum)
        return courseNames;
    }

    async getAllCourses(token: string) {
        authenticate([Role.admin, Role.student, Role.teacher], token)
        
        return db.course;
    }

    async getCourseByName(courseName: CourseEnum, token: string) {
        authenticate([Role.admin, Role.student, Role.teacher], token)

        let [course] = db.course.filter(course => course.name === courseName);
        const teachers = db.teacher.filter(teacher => teacher.courses.include(courseName));
        course['teachers'] = teachers;
        return course;
    }
}

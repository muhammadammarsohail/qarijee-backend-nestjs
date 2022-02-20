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
}

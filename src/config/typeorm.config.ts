import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "../auth/user.entity";
import { Teacher } from "../entities/teacher.entity";
import { Student } from "../entities/student.entity";
import { Admin } from "../entities/admin.entity";
import { Course } from "../entities/course.entity";
import { Classroom } from "../entities/classroom.entity";
import { Assessment } from "../entities/assessment.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'qarijee',
    entities: [User, Teacher, Student, Admin, Course, Classroom, Assessment],
    synchronize: true,   //TODO: set false for production
};
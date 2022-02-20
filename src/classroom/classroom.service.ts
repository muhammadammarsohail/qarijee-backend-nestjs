import { BadRequestException, Injectable } from '@nestjs/common';
import { Classroom, db } from 'src/db';
import { Enroll } from 'src/dto/classroom.dto';
import { Role } from 'src/enum/enums';
import { authenticate } from 'src/utils/utils';
@Injectable()
export class ClassroomService {

    async enroll(queryParams: Enroll.QueryParams, token: string) {
        authenticate([Role.student, Role.admin], token);

        let classroom = new Classroom();
        const id = queryParams.teacherEmail + queryParams.studentEmail + queryParams.courseName;
        const classExists = db.classroom.filter(classroom => classroom.id === id);
        if (classExists) {
            throw new BadRequestException('You are already Enrolled here!')
        }
        classroom.id = id;
        const [student] = db.student.filter(student => student.email === queryParams.studentEmail);
        const [teacher] = db.teacher.filter(teacher => teacher.email === queryParams.teacherEmail);
        const courseNameInSmall: string = queryParams.courseName;
        const capitalizedCourseName: string = courseNameInSmall.charAt(0).toUpperCase();
        classroom.name = `${student.name} <> ${teacher.name} | ${capitalizedCourseName} Classroom`
        classroom.roomLink = teacher.roomLink;
        classroom.teacherEmail = queryParams.teacherEmail;
        classroom.studentEmail = queryParams.studentEmail;
        classroom.courseName = queryParams.courseName;
        classroom.slots = queryParams.slots
        const [course] = db.course.filter(course => course.name === queryParams.courseName)
        classroom.books = course.books;

        db.classroom.push(classroom);
        console.log(db.classroom);

        return classroom;        
    }

    async getClassroomByTeacherEmail(email: string, token: string) {
        authenticate([Role.teacher, Role.admin], token);
        let classrooms = []
        const [admin] = db.admin.filter(admin => admin.jwt === token);
        if (admin) {
            classrooms = db.classroom.filter(classroom => classroom.teacherEmail === email);
        } else {
            const [teacher] = db.teacher.filter(teacher => teacher.jwt === token);
            const teacherEmail = teacher.email;
            classrooms = db.classroom.filter(classroom => classroom.teacherEmail === teacherEmail);
        }
        return classrooms;
    }

    async getClassroomByStudentEmail(email: string, token: string) {
        authenticate([Role.student, Role.admin], token);
        let classrooms = []
        // classroom = db.classroom.filter(classroom => classroom.studentEmail === email);
        // return classroom;
        const [admin] = db.admin.filter(admin => admin.jwt === token);
        if (admin) {
            classrooms = db.classroom.filter(classroom => classroom.studentEmail === email);
        } else {
            const [student] = db.teacher.filter(teacher => teacher.jwt === token);
            const studentEmail = student.email;
            classrooms = db.classroom.filter(classroom => classroom.studentEmail === studentEmail);
        }
        return classrooms;
    }

    async getAllClassrooms(token: string) {
        authenticate([Role.admin], token)
        return db.classroom;
    }

} 

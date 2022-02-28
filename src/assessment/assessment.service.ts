import { Injectable } from '@nestjs/common';
import { Assessment, db } from 'src/db';
import { AssessmentDto } from 'src/dto/generateReport.dto';
import { Role } from 'src/enum/enums';
import { authenticate } from 'src/utils/utils';

@Injectable()
export class AssessmentService {

    async scheduleAssessment(schedule: AssessmentDto.Schedule, token: string) {
        authenticate([Role.teacher, Role.admin], token);

        let assessment = new Assessment();
        assessment.course = schedule.course;
        assessment.slot = schedule.slot;
        assessment.studentEmail = schedule.studentEmail;
        const [admin] = db.admin.filter(admin => admin.jwt === token);
        if (admin) {
            assessment.teacherEmail = schedule.teacherEmail;
        } else {
            const [teacher] = db.teacher.filter(teacher => teacher.jwt === token);
            assessment.teacherEmail = teacher.email;
        }
        assessment.totalMarks = schedule.totalMarks;
        db.assessment.push(assessment);
        console.log(db.assessment);
        
        return assessment;
    }

    async getAllAssessments(token: string) {
        authenticate([Role.admin], token);

        return db.assessment;
    }

    async getAssessmentsByTeacherEmail(email: string, token: string) {
        // authenticate([Role.teacher, Role.admin], token);
        let assessments = []
        const [admin] = db.admin.filter(admin => admin.jwt === token);
        if (admin) {
            assessments = db.assessment.filter(assessment => assessment.teacherEmail === email);
        } else {
            const [teacher] = db.teacher.filter(teacher => teacher.jwt === token);
            const teacherEmail = teacher.email;
            assessments = db.assessment.filter(assessment => assessment.teacherEmail === teacherEmail);
        }
        return assessments;
    }

    async getAssessmentsByStudentEmail(email: string, token: string) {
        authenticate([Role.teacher, Role.admin], token);
        let assessments = []
        const [admin] = db.admin.filter(admin => admin.jwt === token);
        if (admin) {
            assessments = db.assessment.filter(assessment => assessment.studentEmail === email);
        } else {
            const [student] = db.student.filter(student => student.jwt === token);
            const studentEmail = student.email;
            assessments = db.assessment.filter(assessment => assessment.studentEmail === studentEmail);
        }
        return assessments;
    }
}

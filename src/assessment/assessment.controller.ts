import { Body, Controller, Get, Param, Post, Request, ValidationPipe } from '@nestjs/common';
import { AssessmentDto } from 'src/dto/generateReport.dto';
import { Role } from 'src/enum/enums';
import { authenticate } from 'src/utils/utils';
import { AssessmentService } from './assessment.service';

@Controller('assessment')
export class AssessmentController {

    constructor(
        private assessmentService: AssessmentService,
    ) {}

    @Get('all')
    async getAllAssessment(
        @Request() req: any
    ) {
        const authHeader = req.headers['authorization']
        const token = authHeader.split(' ')[1];
        return this.assessmentService.getAllAssessments(token);
    }

    @Get('teacher/:email')
    async getAssessmentsByTeacherEmail(
        @Param('email') email: string,
        @Request() req: any
    ) {
        const authHeader = req.headers['authorization']
        const token = authHeader.split(' ')[1];
        return this.assessmentService.getAssessmentsByTeacherEmail(email, token);
    }

    @Get('student/:email')
    async getAssessmentsByStudentEmail(
        @Param('email') email: string,
        @Request() req: any
    ) {
        const authHeader = req.headers['authorization']
        const token = authHeader.split(' ')[1];
        return this.assessmentService.getAssessmentsByStudentEmail(email, token);
    }
    
    @Post('schedule')
    async scheduleAssessment(
        @Body(ValidationPipe) schedule: AssessmentDto.Schedule,
        @Request() req: any
    ) {
        const authHeader = req.headers['authorization']
        const token = authHeader.split(' ')[1];
        return this.assessmentService.scheduleAssessment(schedule, token);
    }
}

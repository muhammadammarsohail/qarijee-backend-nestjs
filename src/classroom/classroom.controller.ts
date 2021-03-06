import { Body, Controller, Get, Param, Post, Query, Request, ValidationPipe } from '@nestjs/common';
import { Enroll } from 'src/dto/classroom.dto';
import { ClassroomService } from './classroom.service';

@Controller('classroom')
export class ClassroomController {
    constructor(
        private classroomService: ClassroomService
    ) {}

    @Get('teacher/:email')
    async getClassroomByTeacherEmail(
        @Param('email') email: string,
        @Request() req: any
    ) {
        const authHeader = req.headers['authorization']
        const token = authHeader.split(' ')[1];
        return this.classroomService.getClassroomByTeacherEmail(email, token);
    }

    @Get('student/:email')
    async getClassroomByStudentEmail(
        @Param('email') email: string,
        @Request() req: any
    ) {
        const authHeader = req.headers['authorization']
        const token = authHeader.split(' ')[1];
        return this.classroomService.getClassroomByStudentEmail(email, token);
    }

    @Post('enroll')
    async enroll(
        @Body(ValidationPipe) input: Enroll.Input,
        @Request() req: any
    ) {
        const authHeader = req.headers['authorization']
        const token = authHeader.split(' ')[1];
        return this.classroomService.enroll(input, token);
    }

    @Get('all')
    async getAllClassrooms(
        @Request() req: any
    ) {
        const authHeader = req.headers['authorization']
        const token = authHeader.split(' ')[1];
        return this.classroomService.getAllClassrooms(token);
    }
}

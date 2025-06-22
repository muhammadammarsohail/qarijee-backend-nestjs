import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminService } from 'src/admin/admin.service';
import { StudentService } from 'src/student/student.service';
import { TeacherService } from 'src/teacher/teacher.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { Teacher } from '../entities/teacher.entity';
import { Student } from '../entities/student.entity';
import { Admin } from '../entities/admin.entity';
import { Course } from '../entities/course.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Teacher, Student, Admin, Course]),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AdminService,
    TeacherService,
    StudentService,
  ],
})
export class AuthModule {}

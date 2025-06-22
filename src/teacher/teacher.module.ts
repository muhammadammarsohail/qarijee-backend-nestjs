import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';
import { Teacher } from '../entities/teacher.entity';
import { Student } from '../entities/student.entity';
import { Admin } from '../entities/admin.entity';
import { Course } from '../entities/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher, Student, Admin, Course])],
  controllers: [TeacherController],
  providers: [TeacherService]
})
export class TeacherModule {}

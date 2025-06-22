import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { Course } from '../entities/course.entity';
import { Teacher } from '../entities/teacher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Teacher])],
  controllers: [CourseController],
  providers: [CourseService]
})
export class CourseModule {}

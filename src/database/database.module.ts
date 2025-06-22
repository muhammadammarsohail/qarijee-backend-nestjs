import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseSeeder } from './seeder';
import { User } from '../auth/user.entity';
import { Teacher } from '../entities/teacher.entity';
import { Student } from '../entities/student.entity';
import { Admin } from '../entities/admin.entity';
import { Course } from '../entities/course.entity';
import { Classroom } from '../entities/classroom.entity';
import { Assessment } from '../entities/assessment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Teacher,
      Student,
      Admin,
      Course,
      Classroom,
      Assessment
    ])
  ],
  providers: [DatabaseSeeder],
  exports: [DatabaseSeeder]
})
export class DatabaseModule {} 
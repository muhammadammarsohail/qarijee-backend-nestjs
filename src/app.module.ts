import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { ClassroomModule } from './classroom/classroom.module';
import { CourseModule } from './course/course.module';
import { AuthModule } from './auth/auth.module';
import { RightModule } from './right/right.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot(typeOrmConfig),
    StudentModule,
    TeacherModule,
    ClassroomModule,
    CourseModule,
    AuthModule,
    RightModule,
    AdminModule,
  ],
})
export class AppModule {}

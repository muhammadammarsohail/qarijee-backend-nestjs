import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { ClassroomModule } from './classroom/classroom.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    StudentModule,
    TeacherModule,
    ClassroomModule,
  ],
})
export class AppModule {}

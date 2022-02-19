import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminService } from 'src/admin/admin.service';
import { StudentService } from 'src/student/student.service';
import { TeacherService } from 'src/teacher/teacher.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  // imports: [
  //   TypeOrmModule.forFeature([TeacherRepository]),
  // ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AdminService,
    TeacherService,
    StudentService,
  ],
})
export class AuthModule {}

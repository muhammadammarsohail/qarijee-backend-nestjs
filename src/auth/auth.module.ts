import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherRepository } from 'src/teacher/teacher.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TeacherRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}

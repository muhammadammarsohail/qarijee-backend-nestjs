import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from 'src/dto/auth-credentials.dto';
// import { TeacherRepository } from 'src/teacher/teacher.repository';

@Injectable()
export class AuthService {
  // constructor (
  //     @InjectRepository(TeacherRepository)
  //     private teacherRepository: TeacherRepository
  // ) {}
  async signUp(authCredentialsDto: AuthCredentialsDto) {
    //   return await this.teacherRepository.signUp(authCredentialsDto);
  }
}

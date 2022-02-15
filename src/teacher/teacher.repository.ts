import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthCredentialsDto } from 'src/dto/auth-credentials.dto';
import { EntityRepository, Repository } from 'typeorm';
import { Teacher } from './teacher.model';
import * as bcrypt from 'bcrypt';
import { hashPassword } from 'src/utils/utils';

@EntityRepository(Teacher)
export class TeacherRepository extends Repository<Teacher> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { email, password } = authCredentialsDto;

    const teacher = new Teacher();
    // teacher.email = email;
    // teacher.salt = await bcrypt.genSalt();
    // teacher.password = await hashPassword(password, teacher.salt);

    try {
      await teacher.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}

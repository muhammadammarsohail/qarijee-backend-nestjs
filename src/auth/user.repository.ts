import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository } from 'typeorm';

@EntityRepository()
// User
// extends Repository<Teacher>
export class TeacherRepository {
  async signUp(
    authCredentialsDto: // AuthCredentialsDto
    any,
  ): Promise<void> {
    const { email, password } = authCredentialsDto;

    // const teacher = new Teacher();
    // teacher.email = email;
    // teacher.salt = await bcrypt.genSalt();
    // teacher.password = await hashPassword(password, teacher.salt);

    try {
      // await teacher.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}

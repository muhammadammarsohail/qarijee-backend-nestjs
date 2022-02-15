import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from 'src/dto/auth-credentials.dto';
import { Role } from 'src/enums';
import { TeacherRepository } from 'src/teacher/teacher.repository';

export async function hashPassword(
  password: string,
  salt: string,
): Promise<string> {
  return bcrypt.hash(password, salt);
}

// export async function validateUserPassword(authCredentialsDto: AuthCredentialsDto, role: Role): Promise<string> {
//     const { email, password } = authCredentialsDto;

//     switch(role) {
//         case Role.teacher:

//     }
//     const user = await
// }

import * as bcrypt from "bcrypt";
import { SALT } from "src/auth/salt";
import { Role } from "src/enum/enums";
import { TeacherRepository } from "src/teacher/teacher.repository";

export async function hashPassword(
  password: string,
  salt: string
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

export function signJwt(email: string, password: string) {
  let jwt: string[] = []
  const saltChar: string[] = [...SALT];
  const emailChar: string[] = [...email];
  const passwordChar: string[] = [...password];
  for (let i = 0; i < saltChar.length; i++) {
    jwt.push(saltChar[i])
    if (emailChar[i]) {
      jwt.push(emailChar[i])
    }
    if (passwordChar[i]) {
      jwt.push(emailChar[i])
    }
  }
  return jwt.join("");
}

export function authenticate(email: string, password: string, role: Role) {
  const jwt = signJwt(email, password);

}

import { BadRequestException } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { SALT } from "src/auth/salt";
import { db } from "src/db";
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

export function authenticate(roles: Role[], token: string) {
  let permission: boolean = false;
  let authUsers: any[];
  for (const role in roles) {
    let authUser: any;
    switch (role) {
      case Role.admin:
        [authUser] = db.admin.filter(admin => admin.jwt === token);
        break;
      case Role.teacher:
        [authUser] = db.teacher.filter(teacher => teacher.jwt === token);
        break;
      case Role.student:
        [authUser] = db.student.filter(student => student.jwt === token);
        break;
      default:
        break;
    }
    authUsers.push(authUser)
  }
  if (!authUsers?.length) {
    throw new BadRequestException('Unauthorized')
  }
}

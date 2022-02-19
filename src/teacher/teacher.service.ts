import { BadRequestException, Injectable } from '@nestjs/common';
import { db, Teacher } from 'src/db';
import { LoginCredentialsDto } from 'src/dto/loginCredentials.dto';
import { teacherSignUpCredentialsDto } from 'src/dto/signupCredentials.dto';
import { signJwt } from 'src/utils/utils';

@Injectable()
export class TeacherService {
    
    async getMyDetails(token: string){
        let [me] = db.teacher.filter(teacher => teacher.jwt === token);
        return me;
    }

    async login(loginCredentialDto: LoginCredentialsDto) {
        const jwt = signJwt(loginCredentialDto.email, loginCredentialDto.password);
        let [teacher] = db.teacher.filter(adm => adm.jwt === jwt);
        if (!teacher) {
            throw new BadRequestException('User does not exist.')
        }
        return teacher;
    }

    async signUp(signUpCredentials: teacherSignUpCredentialsDto) {
        const teacherExists = [...db.teacher,...db.student,...db.admin].findIndex(teacher => teacher.email === signUpCredentials.email);
        if (teacherExists!=-1) {
            throw new BadRequestException('Account already exists.')
        }
        const jwt: string = signJwt(signUpCredentials.email, signUpCredentials.password);
        let teacher = new Teacher();
        teacher.age = signUpCredentials.age;
        teacher.city = signUpCredentials.city;
        teacher.country = signUpCredentials.country;
        teacher.email = signUpCredentials.email;
        teacher.gender = signUpCredentials.gender;
        teacher.jwt = jwt;
        teacher.recitation = signUpCredentials.recitation;
        teacher.name = signUpCredentials.name;
        teacher.availableSlots = signUpCredentials.availableSlots;
        teacher.courses = signUpCredentials.courses;
        teacher.intro = signUpCredentials.intro;
        teacher.photo = signUpCredentials.photo;
        
        db.teacher.push(teacher);
        console.log(teacher);
        
        return teacher;
    }
}

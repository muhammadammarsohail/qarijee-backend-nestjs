import { BadRequestException, Injectable } from '@nestjs/common';
import { db, Teacher } from 'src/db';
import { LoginCredentialsDto } from 'src/dto/loginCredentials.dto';
import { teacherSignUpCredentialsDto } from 'src/dto/signupCredentials.dto';
import { UpdateTeacher } from 'src/dto/teacher.dto';
import { Role } from 'src/enum/enums';
import { authenticate, signJwt } from 'src/utils/utils';

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
        teacher.roomLink = signUpCredentials.roomLink;
        
        db.teacher.push(teacher);
        console.log(teacher);
        
        return teacher;
    }

    async delete(email: string) {
        const teacherIndex = db.teacher.findIndex(teacher => teacher.email === email);
        db.teacher.splice(teacherIndex, 1);
        return 'Teacher removed successfully.'
    }

    async getAllTeachers() {
        return db.teacher;
    }

    async updateTeacher(email: string, input: UpdateTeacher.UpdateInput) {
        const index = db.teacher.findIndex(teacher => teacher.email === email);
        if(index < 0) {
            throw new BadRequestException("Teacher Doesn't exist")
        }
        let updatedTeacher = db.teacher[index];
        updatedTeacher.isHired = input.isHired || updatedTeacher.isHired;
        updatedTeacher.name = input.name || updatedTeacher.name;
        updatedTeacher.photo = input.photo || updatedTeacher.photo;
        updatedTeacher.intro = input.intro || updatedTeacher.intro;
        updatedTeacher.age = input.age || updatedTeacher.age;
        updatedTeacher.country = input.country || updatedTeacher.country;
        updatedTeacher.city = input.city || updatedTeacher.city;
        updatedTeacher.recitation = input.recitation || updatedTeacher.recitation;
        updatedTeacher.availableSlots = input.availableSlots || updatedTeacher.availableSlots;
        updatedTeacher.courses = input.courses || updatedTeacher.courses;

        if (input.password) {
            const jwt: string = signJwt(email, input.password);
            updatedTeacher.jwt = jwt;
        }

        db.teacher[index] = updatedTeacher;
        return updatedTeacher;
    }

    async getTopTeachers() {

        let teachers = db.teacher
        let sortedTeachers = teachers.sort(
            (a, b) => {
                return a.rating - b.rating;
            }
        )
        return sortedTeachers.slice(0, 4);
    }

    async getTeacherByEmail(email: string) {
        const [teacher] = db.teacher.filter(teacher => teacher.email === email);
        return teacher;
    }

}

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from '../entities/teacher.entity';
import { Student } from '../entities/student.entity';
import { Admin } from '../entities/admin.entity';
import { Course } from '../entities/course.entity';
import { LoginCredentialsDto } from 'src/dto/loginCredentials.dto';
import { teacherSignUpCredentialsDto } from 'src/dto/signupCredentials.dto';
import { UpdateTeacher } from 'src/dto/teacher.dto';
import { Role } from 'src/enum/enums';
import { authenticate, signJwt } from 'src/utils/utils';

@Injectable()
export class TeacherService {
    constructor(
        @InjectRepository(Teacher)
        private teacherRepository: Repository<Teacher>,
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
        @InjectRepository(Admin)
        private adminRepository: Repository<Admin>,
        @InjectRepository(Course)
        private courseRepository: Repository<Course>,
    ) {}
    
    async getMyDetails(token: string) {
        const teacher = await this.teacherRepository.findOne({
            where: { jwt: token }
        });
        return teacher;
    }

    async login(loginCredentialDto: LoginCredentialsDto) {
        const jwt = signJwt(loginCredentialDto.email, loginCredentialDto.password);
        const teacher = await this.teacherRepository.findOne({
            where: { jwt: jwt }
        });
        if (!teacher) {
            throw new BadRequestException('User does not exist.');
        }
        return teacher;
    }

    async signUp(signUpCredentials: teacherSignUpCredentialsDto) {
        // Check if user exists in any table
        const teacherExists = await this.teacherRepository.findOne({
            where: { email: signUpCredentials.email }
        });
        const studentExists = await this.studentRepository.findOne({
            where: { email: signUpCredentials.email }
        });
        const adminExists = await this.adminRepository.findOne({
            where: { email: signUpCredentials.email }
        });

        if (teacherExists || studentExists || adminExists) {
            throw new BadRequestException('Account already exists.');
        }

        const jwt: string = signJwt(signUpCredentials.email, signUpCredentials.password);
        
        const teacher = this.teacherRepository.create({
            age: signUpCredentials.age,
            city: signUpCredentials.city,
            country: signUpCredentials.country,
            email: signUpCredentials.email,
            gender: signUpCredentials.gender,
            jwt: jwt,
            recitation: signUpCredentials.recitation,
            name: signUpCredentials.name,
            availableSlots: signUpCredentials.availableSlots,
            courses: signUpCredentials.courses,
            intro: signUpCredentials.intro,
            photo: signUpCredentials.photo,
            roomLink: signUpCredentials.roomLink,
        });
        
        const savedTeacher = await this.teacherRepository.save(teacher);
        console.log(savedTeacher);
        
        return savedTeacher;
    }

    async delete(email: string) {
        const teacher = await this.teacherRepository.findOne({
            where: { email: email }
        });
        if (teacher) {
            await this.teacherRepository.remove(teacher);
        }
        return 'Teacher removed successfully.';
    }

    async getAllTeachers() {
        return await this.teacherRepository.find();
    }

    async updateTeacher(email: string, input: UpdateTeacher.UpdateInput) {
        const teacher = await this.teacherRepository.findOne({
            where: { email: email }
        });
        
        if (!teacher) {
            throw new BadRequestException("Teacher Doesn't exist");
        }

        if (input.isHired !== undefined) teacher.isHired = input.isHired;
        if (input.name) teacher.name = input.name;
        if (input.photo) teacher.photo = input.photo;
        if (input.intro) teacher.intro = input.intro;
        if (input.age) teacher.age = input.age;
        if (input.country) teacher.country = input.country;
        if (input.city) teacher.city = input.city;
        if (input.recitation) teacher.recitation = input.recitation;
        if (input.availableSlots) teacher.availableSlots = input.availableSlots;
        if (input.courses) teacher.courses = input.courses;

        if (input.password) {
            const jwt: string = signJwt(email, input.password);
            teacher.jwt = jwt;
        }

        return await this.teacherRepository.save(teacher);
    }

    async getTopTeachers() {
        const teachers = await this.teacherRepository.find({
            where: { isHired: true },
            order: { rating: 'ASC' },
            take: 4
        });
        return teachers;
    }

    async getTeacherByEmail(email: string) {
        const teacher = await this.teacherRepository.findOne({
            where: { email: email }
        });
        
        if (!teacher) {
            throw new BadRequestException("Teacher not found");
        }

        const courses = await this.courseRepository.find({
            where: teacher.courses.map(course => ({ name: course }))
        });

        return {
            ...teacher,
            courseDetails: courses
        };
    }
}

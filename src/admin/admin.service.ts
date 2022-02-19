import { BadRequestException, Injectable } from '@nestjs/common';
import { Admin, db, Teacher } from 'src/db';
import { LoginCredentialsDto } from 'src/dto/loginCredentials.dto';
import { adminSignUpCredentialsDto } from 'src/dto/signupCredentials.dto';
import { signJwt } from 'src/utils/utils';

@Injectable()
export class AdminService {

    async login(loginCredentialDto: LoginCredentialsDto) {
        const jwt = signJwt(loginCredentialDto.email, loginCredentialDto.password);
        let [admin] = db.admin.filter(adm => adm.jwt === jwt);
        if (!admin) {
            throw new BadRequestException('User does not exist.')
        }
        return admin;
    }

    async signUp(signUpCredentials: adminSignUpCredentialsDto) {
        const adminExists = [...db.teacher,...db.student,...db.admin].findIndex(admin => admin.email === signUpCredentials.email);
        if (adminExists!=-1) {
            throw new BadRequestException('Account already exists.')
        }
        const jwt: string = signJwt(signUpCredentials.email, signUpCredentials.password);
        let admin = new Admin();
        admin.age = signUpCredentials.age;
        admin.city = signUpCredentials.city;
        admin.country = signUpCredentials.country;
        admin.email = signUpCredentials.email;
        admin.gender = signUpCredentials.gender;
        admin.jwt = jwt;
        admin.name = signUpCredentials.name;

        db.admin.push(admin);
        console.log(admin);
        
        return admin;
    }
}

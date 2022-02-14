import { EntityRepository } from "typeorm";

@EntityRepository(User)
export class TeacherRepository extends Repository<Teacher> {

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { email, password } = authCredentialsDto;

        const teacher = new Teacher();
        teacher.email = email;
        teacher.salt = await bcrypt.genSalt();
        teacher.password = await hashPassword(password, teacher.salt);

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
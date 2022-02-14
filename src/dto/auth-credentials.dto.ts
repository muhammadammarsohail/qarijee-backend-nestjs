import { IsNotEmpty, isNotEmpty, IsString, Matches, MATCHES } from "class-validator";

export class AuthCredentialsDto {

    @IsString()
    @IsNotEmpty()
    @Matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
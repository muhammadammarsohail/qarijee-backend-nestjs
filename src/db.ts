import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Matches } from "class-validator";
import { SlotsDto } from "./dto/availableSlots.dto";
import { Course } from "./enum/courseEnum";
import { Gender, Role } from "./enum/enums";

export const db = {
  student: [],
  teacher: [],
  course: [],
  admin: [{email: 'admin@qarijee.com', name: 'admin', jwt: '2aasdddmm1ii#nn$@@fqq6aa5r4i%j5e4e#.$c^o6mey45453$#%#5t2as@#$we5f4lk@#65f65w2!214#$%'}]
};

export class Db {
  student: { id: number };
  teacher: { isHired: boolean };
}

export class Teacher {
  @IsString()
  @IsNotEmpty()
  @Matches(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  )
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  photo: string;

  @IsString()
  intro: string;

  @IsString()
  @IsNotEmpty()
  isHired: boolean = false;

  @IsString()
  @IsNotEmpty()
  jwt: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsEnum(Gender)
  gender: Gender;

  @IsString()
  @IsNotEmpty()
  country: string;
  
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  recitation: string;

  @IsArray()
  availableSlots: SlotsDto.AvailableSlots[];

  @IsNumber()
  @IsOptional()
  rating: number = 0;

  @IsArray()
  @IsString()
  @IsOptional()
  reviews: string[] = [];

  @IsArray()
  @IsEnum(Course)
  courses: Course[];

  @IsNumber()
  numberOfStudents: number = 0;
}

export class Admin {
  @IsString()
  @IsNotEmpty()
  @Matches(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  )
  email: string;

  @IsString()
  @IsNotEmpty()
  jwt: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsEnum(Gender)
  gender: Gender;

  @IsString()
  country: string;
  
  @IsString()
  city: string;
}

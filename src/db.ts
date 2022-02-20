import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Matches } from "class-validator";
import { AssessmentDto } from "./dto/generateReport.dto";
import { Book, SlotsDto } from "./dto/availableSlots.dto";
import { CourseEnum } from "./enum/courseEnum";
import { Gender, Role } from "./enum/enums";

export const db = {
  student: [],
  teacher: [],
  admin: [{email: 'admin@qarijee.com', name: 'admin', jwt: '2aasdddmm1ii#nn$@@fqq6aa5r4i%j5e4e#.$c^o6mey45453$#%#5t2as@#$we5f4lk@#65f65w2!214#$%'}],
  course: [],
  classroom: [],
  assessment: [],
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
  availableSlots: SlotsDto.AvailableSlot[];

  @IsNumber()
  @IsOptional()
  rating: number = 0;

  @IsArray()
  @IsString()
  @IsOptional()
  reviews: string[] = [];

  @IsArray()
  @IsEnum(CourseEnum)
  courses: CourseEnum[];

  @IsNumber()
  numberOfStudents: number = 0;

  @IsString()
  roomLink: string;
}

export class Student {
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
  @IsNotEmpty()
  country: string;
  
  @IsString()
  @IsNotEmpty()
  city: string;
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

export class Classroom {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  name: string;

  @IsEnum(CourseEnum)
  @IsNotEmpty()
  courseName: CourseEnum;

  @IsString()
  @IsNotEmpty()
  teacherEmail: string;

  @IsString()
  @IsNotEmpty()
  studentEmail: string;

  @IsString()
  roomLink: string;

  @IsNotEmpty()
  @IsArray()
  slots: SlotsDto.Slot[];

  @IsBoolean()
  isTrial: boolean = false;

  @IsEnum(Book.Book)
  @IsArray()
  @IsOptional()
  books: Book.Book[];
}



export class Course {

  @IsString()
  name: CourseEnum;

  @IsString()
  description: string;

  @IsEnum(Book.Book)
  @IsArray()
  @IsOptional()
  books: Book.Book[];

}

export class Assessment {

  @IsNumber()
  totalMarks: number;

  @IsEnum(Course)
  course: Course

  @IsString()
  teacherEmail: string;

  @IsString()
  studentEmail: string;

  @IsOptional()
  slot?: SlotsDto.Slot;

  @IsNumber()
  obtainedMarks: number;

  @IsString()
  remarks: string;

  @IsOptional()
  report: AssessmentDto.Report;
}

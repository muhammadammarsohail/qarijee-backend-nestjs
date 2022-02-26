import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Matches } from "class-validator";
import { AssessmentDto } from "./dto/generateReport.dto";
import { Book, SlotsDto } from "./dto/availableSlots.dto";
import { CourseEnum } from "./enum/courseEnum";
import { Gender, Role } from "./enum/enums";

export const db = {
  student: [],
  teacher: [],
  admin: [{email: 'admin@qarijee.com', name: 'admin', jwt: '2aasdddmm1ii#nn$@@fqq6aa5r4i%j5e4e#.$c^o6mey45453$#%#5t2as@#$we5f4lk@#65f65w2!214#$%'}],
  course: [
    {name: CourseEnum.tajweed, description: "I am a course", books: [{name: 'Noorani Quaida', link: 'console.firebase.com/qarijee/books/nooraniquaida', thumbnail: 'console.firebase.com/qarijee/books/thumbnail/nooraniquaida'}, {name: "Holy Quran", link: 'console.firebase.com/qarijee/books/holyquran', thumbnail: 'console.firebase.com/qarijee/books/thumbnail/holyquran'}]},
    {name: CourseEnum.hifz, description: "I am a course", books: [{name: "Holy Quran", link: 'console.firebase.com/qarijee/books/holyquran', thumbnail: 'console.firebase.com/qarijee/books/thumbnail/holyquran'}]},
    {name: CourseEnum.qiraat, description: "I am a course", books: [{name: "Holy Quran", link: 'console.firebase.com/qarijee/books/holyquran', thumbnail: 'console.firebase.com/qarijee/books/thumbnail/holyquran'}, {name: "Saut-ul-Quran", link: 'console.firebase.com/books/sautulquran', thumbnail: 'console.firebase.com/qarijee/books/thumbnail/sautulquran'}]},
    {name: CourseEnum.tafseer, description: "I am a course", books: [{name: "Muaarif-ul-Quran", link: 'console.firebase.com/qarijee/books/muaarifulquran', thumbnail: 'console.firebase.com/qarijee/books/thumbnail/muaarifulquran'}, {name: "Asan Tarjuma-e-Quran", link: 'console.firebase.com/qarijee/books/asantarjumaequran', thumbnail: 'console.firebase.com/qarijee/books/thumbnail/asantarjumaequran'}]},
    {name: CourseEnum.hadees, description: "I am a course", books: [{name: 'Sahih Bukhari Vol 1', link: 'console.firebase.com/qarijee/books/sahihbukharivol1', thumbnail: 'console.firebase.com/books/qarijee/thumbnail/sahihbukharivol1'}, {name: "Sahih Bukhari Vol 2", link: 'console.firebase.com/qarijee/books/sahihbukharivol2', thumbnail: 'console.firebase.com/qarijee/books/thumbnail/sahihbukharivol2'}, {name: "Sahih Bukhari Vol 3", link: 'console.firebase.com/qarijee/books/sahihbukharivol3', thumbnail: 'console.firebase.com/qarijee/books/thumbnail/sahihbukharivol3'}]},
  ],
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

  @IsArray()
  @IsOptional()
  books: Book.Book[];

}

export class Assessment {

  @IsNumber()
  totalMarks: number;

  @IsEnum(CourseEnum)
  course: CourseEnum

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

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
    {name: CourseEnum.tajweed, description: "I am a course", books: [{name: 'Noorani Quaida', link: 'console.firebase.com/qarijee/books/nooraniquaida', thumbnail: 'https://olipdf.com/wp-content/uploads/2021/06/noorani-qaida-869.webp'}, {name: "Holy Quran", link: 'console.firebase.com/qarijee/books/holyquran', thumbnail: 'https://5.imimg.com/data5/YV/LG/MY-45930635/holy-quran-books-500x500.jpg'}]},
    {name: CourseEnum.hifz, description: "I am a course", books: [{name: "Holy Quran", link: 'console.firebase.com/qarijee/books/holyquran', thumbnail: 'https://5.imimg.com/data5/YV/LG/MY-45930635/holy-quran-books-500x500.jpg'}]},
    {name: CourseEnum.qiraat, description: "I am a course", books: [{name: "Holy Quran", link: 'console.firebase.com/qarijee/books/holyquran', thumbnail: 'https://5.imimg.com/data5/YV/LG/MY-45930635/holy-quran-books-500x500.jpg'}, {name: "Saut-ul-Quran", link: 'console.firebase.com/books/sautulquran', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSychO5HnCVDF-oftg4iGt_jApZdjf8ZDe1wA&usqp=CAU'}]},
    {name: CourseEnum.tafseer, description: "I am a course", books: [{name: "Muaarif-ul-Quran", link: 'console.firebase.com/qarijee/books/muaarifulquran', thumbnail: 'https://idara.com/wp-content/uploads/2021/07/maariful_quran_urdu_Faisal_1.jpg'}, {name: "Asan Tarjuma-e-Quran", link: 'console.firebase.com/qarijee/books/asantarjumaequran', thumbnail: 'https://bookcorner.nyc3.digitaloceanspaces.com/uploads/original/5ec366610e03c1589864033.jpg'}]},
    {name: CourseEnum.hadees, description: "I am a course", books: [{name: 'Sahih Bukhari Vol 1', link: 'console.firebase.com/qarijee/books/sahihbukharivol1', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxzjzUXvnRm10hpB_8zTry-1QXVJ-zpRjf6ickcnVQE6iQfQ2YIPFj0IfI-lh4yTMluw&usqp=CAU'}, {name: "Sahih Bukhari Vol 2", link: 'console.firebase.com/qarijee/books/sahihbukharivol2', thumbnail: 'https://is2-ssl.mzstatic.com/image/thumb/Purple49/v4/0e/7f/94/0e7f948e-e1d0-2ad5-6ede-0f0b3004f745/source/512x512bb.jpg'}, {name: "Sahih Bukhari Vol 3", link: 'console.firebase.com/qarijee/books/sahihbukharivol3', thumbnail: 'https://pdfbooksfree.pk/wp-content/uploads/2011/10/Sahih-Bukhari-Urdu-8-volumes-complete-pdf-1280x720.jpg'}]},
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

  @IsBoolean()
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

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { CourseEnum } from "../enum/courseEnum";
import { Course } from "./course.entity";
import { Teacher } from "./teacher.entity";
import { Student } from "./student.entity";

@Entity()
export class Classroom {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Course, course => course.classrooms)
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @Column()
  courseId: number;

  @ManyToOne(() => Teacher, teacher => teacher.classrooms)
  @JoinColumn({ name: 'teacherId' })
  teacher: Teacher;

  @Column()
  teacherId: number;

  @ManyToOne(() => Student, student => student.classrooms)
  @JoinColumn({ name: 'studentId' })
  student: Student;

  @Column()
  studentId: number;

  @Column({ nullable: true })
  roomLink: string;

  @Column('simple-json')
  slots: any[]; // Array of Slot objects

  @Column({ default: false })
  isTrial: boolean;

  @Column('simple-json', { nullable: true })
  books: any[]; // Array of Book objects
} 
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { CourseEnum } from "../enum/courseEnum";
import { Course } from "./course.entity";
import { Teacher } from "./teacher.entity";
import { Student } from "./student.entity";

@Entity()
export class Assessment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  totalMarks: number;

  @ManyToOne(() => Course, course => course.assessments)
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @Column()
  courseId: number;

  @ManyToOne(() => Teacher, teacher => teacher.assessments)
  @JoinColumn({ name: 'teacherId' })
  teacher: Teacher;

  @Column()
  teacherId: number;

  @ManyToOne(() => Student, student => student.assessments)
  @JoinColumn({ name: 'studentId' })
  student: Student;

  @Column()
  studentId: number;

  @Column('simple-json', { nullable: true })
  slot: any; // Slot object

  @Column()
  obtainedMarks: number;

  @Column()
  remarks: string;

  @Column('simple-json', { nullable: true })
  report: any; // Report object
} 
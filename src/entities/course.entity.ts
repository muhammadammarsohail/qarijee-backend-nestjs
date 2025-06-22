import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import { CourseEnum } from "../enum/courseEnum";
import { Classroom } from "./classroom.entity";
import { Assessment } from "./assessment.entity";

@Entity()
@Unique(['name'])
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: CourseEnum
  })
  name: CourseEnum;

  @Column()
  description: string;

  @Column('simple-json', { nullable: true })
  books: any[]; // Array of Book objects

  @OneToMany(() => Classroom, classroom => classroom.course)
  classrooms: Classroom[];

  @OneToMany(() => Assessment, assessment => assessment.course)
  assessments: Assessment[];
} 
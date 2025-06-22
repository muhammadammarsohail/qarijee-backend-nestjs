import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import { Gender } from "../enum/enums";
import { Classroom } from "./classroom.entity";
import { Assessment } from "./assessment.entity";

@Entity()
@Unique(['email'])
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  jwt: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column({
    type: 'enum',
    enum: Gender
  })
  gender: Gender;

  @Column()
  country: string;
  
  @Column()
  city: string;

  @OneToMany(() => Classroom, classroom => classroom.student)
  classrooms: Classroom[];

  @OneToMany(() => Assessment, assessment => assessment.student)
  assessments: Assessment[];
} 
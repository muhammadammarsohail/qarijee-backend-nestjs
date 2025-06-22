import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import { Gender, Role } from "../enum/enums";
import { CourseEnum } from "../enum/courseEnum";
import { Classroom } from "./classroom.entity";
import { Assessment } from "./assessment.entity";
import { SlotsDto } from "src/dto/availableSlots.dto";

@Entity()
@Unique(['email'])
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  photo: string;

  @Column()
  intro: string;

  @Column({ default: false })
  isHired: boolean;

  @Column()
  jwt: string;

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

  @Column()
  recitation: string;

  @Column('simple-array')
  availableSlots: SlotsDto.AvailableSlot[]; // JSON stringified array

  @Column({ type: 'float', default: 0 })
  rating: number;

  @Column('simple-array', { default: [] })
  reviews: string[];

  @Column('simple-array')
  courses: string[]; // JSON stringified CourseEnum array

  @Column({ default: 0 })
  numberOfStudents: number;

  @Column({ nullable: true })
  roomLink: string;

  @OneToMany(() => Classroom, classroom => classroom.teacher)
  classrooms: Classroom[];

  @OneToMany(() => Assessment, assessment => assessment.teacher)
  assessments: Assessment[];
} 
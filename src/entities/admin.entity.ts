import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";
import { Gender } from "../enum/enums";

@Entity()
@Unique(['email'])
export class Admin {
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
} 
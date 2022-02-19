import { Gender } from "src/enum/enums";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['email'])
export class Student extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    jwt: string;

    @Column()
    age: number;

    @Column()
    gender: Gender;

    @Column()
    country: string;

    @Column()
    city: string;
}
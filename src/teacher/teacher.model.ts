import { SlotsDto } from "src/dto/availableSlots.dto";
import { Gender } from "src/enums";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Teacher extends BaseEntity {

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

    @Column()
    recitation: string;

    @Column("int", { array: true })
    availableSlots: SlotsDto.AvailableSlots[];
}
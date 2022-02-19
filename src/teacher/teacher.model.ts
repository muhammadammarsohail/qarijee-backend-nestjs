import { User } from "src/auth/user.entity";
import { SlotsDto } from "src/dto/availableSlots.dto";
import { Gender } from "src/enum/enums";
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['email'])
export class Teacher extends BaseEntity {

    // @PrimaryGeneratedColumn()
    // id: number;

    // @Column({ name: 'user_id', type: 'int', unique: true })
    // userId: number;

    @OneToOne(type => User)
    @JoinColumn({ name: 'user_id' })

    @Column()
    name: string;

    // @Column()
    // email: string;

    // @Column()
    // password: string;

    // @Column()
    // salt: string;

    // @Column()
    // jwt: string;

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
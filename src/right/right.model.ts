import { Role } from "src/enum/enums";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Classroom extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    name: string;

    @Column()
    role: Role;

    @Column()
    route: string;

    @Column({ name: 'is_active', default: true })
    isActive: boolean;

}
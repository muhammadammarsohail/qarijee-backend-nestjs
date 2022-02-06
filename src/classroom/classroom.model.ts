import { Course } from "src/course/course.model";
import { Day } from "src/enums";
import { Student } from "src/student/student.model";
import { Teacher } from "src/teacher/teacher.model";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Classroom extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    courseId: number;

    @ManyToOne(type => Course)
    @JoinColumn({ name: 'course_id' })
    course: Course;

    @Column()
    teacherId: number;

    @ManyToOne(type => Teacher)
    @JoinColumn({ name: 'teacher_id' })
    teacher: Teacher;

    @Column()
    studentId: number;

    @ManyToOne(type => Student)
    @JoinColumn({ name: 'student_id' })
    student: Student;

    @Column()
    joiningLink: string;

    @Column({ array: true })
    days: Day[];

    @Column()
    hour: number;
}
import { IsArray, IsDateString, IsEnum, isEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { CourseEnum } from "src/enum/courseEnum"

export namespace Assessment {

    export class Schedule {

        @IsNumber()
        totalMarks: number;

        @IsEnum(CourseEnum)
        course: CourseEnum

        @IsNumber()
        teacherId: number;

        @IsNumber()
        studentId: number;

        @IsDateString()
        examTime: string;

    }

    export class Report {

        @IsNumber()
        obtainedMarks: number;

        @IsString()
        remarks: string;

    }

    export class List {

        @IsNumber()
        obtainedMarks: number;

        @IsNumber()
        totalMarks: number;

        @IsString()
        remarks: string;

        @IsEnum(CourseEnum)
        course: CourseEnum

        @IsNumber()
        teacherId: number;

        @IsNumber()
        studentId: number;

        @IsDateString()
        examTime: string;

    }
}
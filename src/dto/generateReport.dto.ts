import { IsArray, IsDateString, IsEnum, isEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { Course } from "src/enum/courseEnum"

export namespace Assessment {

    export class Schedule {

        @IsNumber()
        totalMarks: number;

        @IsEnum(Course)
        course: Course

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

        @IsEnum(Course)
        course: Course

        @IsNumber()
        teacherId: number;

        @IsNumber()
        studentId: number;

        @IsDateString()
        examTime: string;

    }
}
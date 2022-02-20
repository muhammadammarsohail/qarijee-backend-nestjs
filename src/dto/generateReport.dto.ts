import { IsArray, IsDateString, IsEnum, isEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { Course } from "src/enum/courseEnum"
import { SlotsDto } from "./availableSlots.dto";

export namespace AssessmentDto {

    export class Schedule {

        @IsNumber()
        totalMarks: number;

        @IsEnum(Course)
        course: Course

        @IsString()
        teacherEmail: string;

        @IsString()
        studentEmail: string;

        slot: SlotsDto.Slot;
    }

    export class GenerateReport {

        @IsNumber()
        obtainedMarks: number;

        @IsString()
        remarks: string;

    }

    export class Report {

        @IsNumber()
        @IsOptional()
        obtainedMarks: number;

        @IsNumber()
        totalMarks: number;

        @IsString()
        remarks: string;

        @IsEnum(Course)
        course: Course;

        @IsString()
        teacherEmail: string;

        @IsString()
        studentEmail: string;

        slot: SlotsDto.Slot;
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
        
        slot: SlotsDto.Slot;

    }
}
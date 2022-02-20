import { IsArray, IsDateString, IsEnum, isEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { SlotsDto } from "./availableSlots.dto";
import { CourseEnum } from "src/enum/courseEnum"
export namespace AssessmentDto {

    export class Schedule {

        @IsNumber()
        totalMarks: number;

        @IsEnum(CourseEnum)
        course: CourseEnum

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

        @IsEnum(CourseEnum)
        course: CourseEnum;

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

        @IsEnum(CourseEnum)
        course: CourseEnum

        @IsNumber()
        teacherId: number;

        @IsNumber()
        studentId: number;
        
        slot: SlotsDto.Slot;

    }
}
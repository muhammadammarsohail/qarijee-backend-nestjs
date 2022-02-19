import { IsNotEmpty, IsString, IsEnum, IsArray } from "class-validator"
import { Course } from "src/enum/courseEnum";
import { SlotsDto } from "./availableSlots.dto";

export namespace Enroll {
    export class QueryParams {
        @IsString()
        @IsNotEmpty()
        studentEmail: string;

        @IsString()
        teacherEmail: string;

        @IsEnum(Course)
        courseName: Course;

        @IsArray()
        slots: SlotsDto.Slot[];
    }
}
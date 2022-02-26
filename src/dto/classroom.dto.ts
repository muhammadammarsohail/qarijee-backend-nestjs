import { IsNotEmpty, IsString, IsEnum, IsArray } from "class-validator"
import { CourseEnum } from "src/enum/courseEnum";
import { SlotsDto } from "./availableSlots.dto";

export namespace Enroll {
    export class Input {
        @IsString()
        @IsNotEmpty()
        studentEmail: string;

        @IsString()
        teacherEmail: string;

        @IsEnum(CourseEnum)
        courseName: CourseEnum;

        @IsArray()
        slots: SlotsDto.Slot[];
    }
}
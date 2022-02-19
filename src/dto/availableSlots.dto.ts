import { Day } from "src/enum/enums";
import { IsArray, IsNumber } from "class-validator";

export namespace SlotsDto {

    export class AvailableSlots {        
        @IsArray()
        day: Day;

        @IsArray()
        @IsNumber()
        hour: number[];
    }
}
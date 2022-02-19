import { Day } from "src/enum/enums";
import { IsArray, IsNumber } from "class-validator";

export namespace SlotsDto {

    export class AvailableSlot {        
        @IsArray()
        day: Day;

        @IsArray()
        @IsNumber()
        hour: number[];
    }

    export class Slot {
        @IsArray()
        day: Day;

        @IsArray()
        @IsNumber()
        hour: number;
    }
}
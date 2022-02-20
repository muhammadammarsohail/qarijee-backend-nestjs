import { Day } from "src/enum/enums";
import { IsArray, IsNumber, IsString } from "class-validator";

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

export namespace Book {
    export class Book {        
        @IsString()
        name: string;

        @IsString()
        link: string;

        @IsString()
        thumbnail: string;
    }
}
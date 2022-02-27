import { IsArray, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { CourseEnum } from "src/enum/courseEnum";
import { SlotsDto } from "./availableSlots.dto";

export namespace UpdateStudent {
    export class UpdateInput {
        
        @IsString()
        @IsOptional()
        password?: string;
    
        @IsString()
        @IsOptional()
        name?: string;
        
        @IsNumber()
        @IsOptional()
        age?: number;        
        
        @IsString()
        @IsOptional()
        country?: string;

        @IsString()
        @IsOptional()
        city?: string;
  
    }
}
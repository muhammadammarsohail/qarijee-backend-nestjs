import { IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { CourseEnum } from "src/enum/courseEnum";
import { Gender } from "src/enum/enums";
import { SlotsDto } from "./availableSlots.dto";

export namespace UpdateTeacher {
  export class UpdateInput {
  
    @IsString()
    @IsOptional()
    name?: string;
  
    @IsString()
    @IsOptional()
    photo?: string;
  
    @IsString()
    @IsOptional()
    intro?: string;
  
    @IsString()
    @IsOptional()
    password?: string;

    @IsNumber()
    @IsOptional()
    age?: number;
  
    @IsString()
    @IsOptional()
    country?: string;
    
    @IsString()
    @IsOptional()
    city?: string;
  
    @IsString()
    @IsOptional()
    recitation?: string;
  
    @IsArray()
    @IsOptional()
    availableSlots?: SlotsDto.AvailableSlot[];
  
    @IsArray()
    @IsEnum(CourseEnum)
    @IsOptional()
    courses?: CourseEnum[];

  }

  export class UpdateByAdminInput {
  
    @IsString()
    @IsOptional()
    name?: string;
  
    @IsString()
    @IsOptional()
    photo?: string;
  
    @IsString()
    @IsOptional()
    intro?: string;

    @IsBoolean()
    @IsOptional()
    isHired?: boolean;

    @IsString()
    @IsOptional()
    password?: string;
  
    @IsNumber()
    @IsOptional()
    age?: number;

    @IsEnum(Gender)
    @IsOptional()
    gender?: Gender;
  
    @IsString()
    @IsOptional()
    country?: string;
    
    @IsString()
    @IsOptional()
    city?: string;
  
    @IsString()
    @IsOptional()
    recitation?: string;
  
    @IsArray()
    @IsOptional()
    availableSlots?: SlotsDto.AvailableSlot[];

    @IsNumber()
    @IsOptional()
    rating?: number = 0;

    @IsArray()
    @IsString()
    @IsOptional()
    reviews?: string[] = [];
  
    @IsArray()
    @IsOptional()
    @IsEnum(CourseEnum)
    courses?: CourseEnum[];

    @IsNumber()
    @IsOptional()
    numberOfStudents?: number = 0;
  }


}
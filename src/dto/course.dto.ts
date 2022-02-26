import { IsArray, IsOptional, IsString } from "class-validator";
import { Book } from "./availableSlots.dto";

export class UpdateCourse {
  
    @IsString()
    description: string;
  
    @IsArray()
    @IsOptional()
    books: Book.Book[];
  
  }
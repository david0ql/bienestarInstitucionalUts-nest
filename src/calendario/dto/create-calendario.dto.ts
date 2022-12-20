import { IsArray, IsEmail, IsString } from "class-validator";


export class CreateCalendarioDto {

  @IsString()
  @IsEmail()
  correoProfesional: string;

  @IsString()
  startStr: string;

  @IsString()
  endStr: string;

  @IsArray()
  franjas: string[]
  
}

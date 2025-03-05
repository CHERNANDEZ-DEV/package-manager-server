import { IsString, IsNumber } from "class-validator";

export class PackageDto {

    @IsNumber()
    weight: number;
  
    @IsString()
    content: string;
  
    @IsNumber()
    length: number;
  
    @IsNumber()
    width: number;
  
    @IsNumber()
    height: number;

}
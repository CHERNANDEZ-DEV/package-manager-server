import { IsOptional, IsEmail, IsDateString, IsString, ValidateNested } from "class-validator";
import { Type } from 'class-transformer'
import { PackageDto } from "../../packages/dto/package.dto";

export class CreateOrderDto {
    @IsString()
    pickupAddress: string;

    @IsDateString()
    scheduledDate: string;

    @IsString()
    senderName: string;

    @IsString()
    senderLastName: string;

    @IsEmail()
    senderEmail: string;

    @IsString()
    senderPhone: string;
    
    @IsString()
    recipientAddress: string;

    @IsString()
    department: string;

    @IsString()
    municipality: string;

    @IsString()
    referencePoint: string;

    @IsOptional()
    @IsString()
    instructions?: string;

    @ValidateNested({ each: true })
    @Type(() => PackageDto)
    packages: PackageDto[];
}
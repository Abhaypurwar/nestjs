import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsString, IsNotEmpty, IsEmail, IsNumber } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsEmail({}, { message: "Enter a valid email address" })
    @Transform((param) => param.value.toLowerCase())
    email: string;
  
    @ApiPropertyOptional()
    @IsString()
    phoneNumber?: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    age: number;
}

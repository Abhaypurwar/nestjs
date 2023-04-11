import { ApiProperty  } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsUUID } from "class-validator";

export class GetUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    id: string;
}

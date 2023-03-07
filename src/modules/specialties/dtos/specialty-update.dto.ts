import { IsNotEmpty, IsObject, IsOptional, IsString, Length, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

class ColorJson {
    @ApiProperty({example: '#FFFF00', description: 'Код цвета'})
    @IsNotEmpty()
    @IsString()
    colorBackground: string;

    @ApiProperty({example: 'Yellow', description: 'Название Цвета'})
    @IsNotEmpty()
    @IsString()
    colorText: string;
}

export class SpecialtyUpdateDto {

    @ApiProperty({example: 'DevOps', description: 'Название Специализации'})
    @IsNotEmpty()
    @IsString()
    @Length(1, 63)
    @IsOptional()
    name?: string;

    @ApiProperty({example: ColorJson, description: 'Цвет для специализации'})
    @IsNotEmpty()
    @IsObject()
    @ValidateNested({each: true})
    @Type(() => ColorJson)
    @IsOptional()
    color?: ColorJson;
}
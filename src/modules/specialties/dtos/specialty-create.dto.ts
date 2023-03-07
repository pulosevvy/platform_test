import { IsNotEmpty, IsObject, IsString, Length, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

class ColorJson {
    @ApiProperty({example: '#006400', description: 'Код цвета'})
    @IsNotEmpty()
    @IsString()
    colorBackground: string;

    @ApiProperty({example: 'Green', description: 'Название Цвета'})
    @IsNotEmpty()
    @IsString()
    colorText: string;
}

export class SpecialtyCreateDto {

    @ApiProperty({example: 'Developer', description: 'Название Специализации'})
    @IsNotEmpty()
    @IsString()
    @Length(1, 63)
    name: string;

    @ApiProperty({example: ColorJson, description: 'Цвет для специализации'})
    @IsNotEmpty()
    @IsObject()
    @ValidateNested({each: true})
    @Type(() => ColorJson)
    color: ColorJson;
}
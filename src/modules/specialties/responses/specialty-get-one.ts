import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType } from "sequelize-typescript";
import { IsNotEmpty, IsString } from "class-validator";

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

export class SpecialtiesCreateResponseField {
    @ApiProperty({example: '1', description: 'Уникальный Идентификатор'})
    id: string;

    @ApiProperty({example: 'Developer', description: 'Название Специализации'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @ApiProperty({example: ColorJson, description: 'Цвет для специализации'})
    @ApiProperty({example: '', description: ''})
    color: ColorJson;
}

export class SpecialtiesGetOneResponse {
    @ApiProperty()
    specialties: SpecialtiesCreateResponseField
}

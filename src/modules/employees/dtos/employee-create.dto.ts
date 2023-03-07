import {
    IsArray,
    IsEmail,
    IsEnum,
    IsOptional,
    IsString,
    Length,
    ValidateNested
} from "class-validator";
import { StatusEnum } from "../../../common/libs/interfaces/user.interface";

export class EmployeeCreateDto {

    @IsString()
    @Length(1, 127)
    name: string;

    @IsString()
    @IsEmail()
    @Length(1, 255)
    email: string;

    @IsString()
    @Length(1, 255)
    password: string;

    @IsString()
    @Length(1, 31)
    phone: string;

    @IsString()
    @Length(1, 30)
    @IsEnum(StatusEnum)
    status: StatusEnum;

    @IsString()
    @IsOptional()
    birthday?: string;

    @IsString()
    @Length(1, 63)
    @IsOptional()
    telegram?: string;

    @IsString()
    @Length(1, 127)
    @IsOptional()
    avatar?: string;

    @IsArray()
    @IsString({each: true})
    @IsOptional()
    specialtiesIds?: string[];
}

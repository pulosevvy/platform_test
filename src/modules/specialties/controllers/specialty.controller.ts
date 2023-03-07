import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";

import { SpecialtyService } from "../services/specialty.service";
import { SpecialtyCreateDto } from "../dtos/specialty-create.dto";
import { SpecialtyCreateResponse } from "../responses/specialty-create.response";
import { SpecialtyGetAllResponse } from "../responses/specialty-get-all.response";
import { SpecialtyUpdateDto } from "../dtos/specialty-update.dto";
import { SpecialtyUpdateResponse } from "../responses/specialty-update.response";
import { SpecialtySearchByNameResponse } from "../responses/specialty-search-by-name.response";

@ApiTags('Specialties')
@Controller('specialties')
export class SpecialtyController {

    constructor(private readonly specialtiesService: SpecialtyService) {}

    @ApiOperation({summary: "Create Specialties", description: "Создание специальности"})
    @ApiResponse({status: 201, type: SpecialtyCreateResponse})
    @ApiResponse({status: 400})
    @Post()
    async createSpecialties(@Body() dto: SpecialtyCreateDto) {
        return this.specialtiesService.create(dto);
    }

    @ApiOperation({summary: 'Getting All Specialties', description: 'Получение всех специальностей'})
    @ApiResponse({status: 200, type: [SpecialtyGetAllResponse]})
    @ApiResponse({status: 400, description: 'BadRequest'})
    @Get()
    async getAllSpecialties() {
        return this.specialtiesService.getAllSpecialties();
    }

    @ApiOperation({summary: 'Updating Specialties', description: 'Обновление специальности'})
    @ApiResponse({status: 200, type: SpecialtyUpdateResponse})
    @ApiResponse({status: 400, description: 'BadRequest'})
    @Patch(':id')
    async updateSpecialties(
            @Param('id', new ParseUUIDPipe()) id: string,
            @Body() dto: SpecialtyUpdateDto
        ) {
        return this.specialtiesService.updateSpecialties(id, dto);
    }

    @ApiOperation({summary: 'Deleting Specialties'})
    @ApiResponse({status: 200})
    @ApiResponse({status: 400, description: 'BadRequest'})
    @Delete(':id')
    async deleteSpecialties(@Param('id', new ParseUUIDPipe()) id: string) {
        return this.specialtiesService.deleteSpecialties(id);
    }

    @ApiOperation({summary: 'Search Specialties By Name', description: 'Поиск специальности по наименованию'})
    @ApiQuery({name: 'name', description: 'Имя по которому производится поиск', type: String})
    @ApiResponse({status: 200, type: SpecialtySearchByNameResponse})
    @ApiResponse({status: 400, description: 'BadRequest'})
    @Get('search')
    async findOneSpecialtiesByName(@Query('name') name: string) {
        return this.specialtiesService.findOneSpecialtiesByName(name);
    }

}
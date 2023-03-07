import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    UploadedFile,
    UseInterceptors
} from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";

import { EmployeeService } from "../services/employee.service";
import { EmployeeCreateDto } from "../dtos/employee-create.dto";
import { EmployeeUpdateDto } from "../dtos/employee-update.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@ApiTags('Employees')
@Controller('employees')
export class EmployeeController {

    constructor(private readonly employeeService: EmployeeService) {}

    @ApiOperation({summary: 'Getting all employees', description: 'Просмотр всех сотрудников'})
    @Get()
    async getAllEmployees() {

    }

    @ApiOperation({summary: 'Getting one employee', description: 'Просмотр подробной информации о сотруднике'})
    @Get(':id')
    async getOneEmployee(@Param('id') id: string) {

    }

    @ApiOperation({summary: 'Create employee', description: 'Добавление сотрудника'})
    @Post()
    async createEmployee(@Body() dto: EmployeeCreateDto,) {
        return this.employeeService.createEmployeeService(dto);
    }

    @ApiOperation({summary: 'Update employee', description: 'Редактирование сотрудника'})
    @Patch()
    async updateEmployee(@Body() dto: EmployeeUpdateDto) {

    }

    @ApiOperation({summary: 'Deleting employee', description: 'Удаление сотрудника'})
    @Delete()
    async deleteEmployee(@Param('id') id: string) {

    }

    @ApiOperation({summary: 'Search employee by name', description: 'Поиск сотрудника по имени'})
    @ApiQuery({name: 'name', description: 'Имя по которому производится поиск', type: String})
    @Get('search')
    async searchByName(@Query('name') name: string) {

    }

    @ApiOperation({summary: 'Filtering employees by specialty', description: 'Фильтрация сотрудника по специальности'})
    @Get()
    async filterBySpecialty() {

    }


}
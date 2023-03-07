import { BadRequestException, Injectable } from "@nestjs/common";

import { EmployeeRepository } from "../repositories/employee.repository";
import { EmployeeCreateDto } from "../dtos/employee-create.dto";
import { SpecialtyRepository } from "../../specialties/repositories/specialty.repository";
import { EmployeeEntity } from "../entities/employee.entity";
import { EMPLOYEE_EMAIL_ALREADY_ERROR } from "../constants/employee.constants";
import { FileRepository } from "../../files/repositories/file.repository";
import { AvatarCreateDto } from "../dtos/avatar-create.dto";

@Injectable()
export class EmployeeService {

    constructor(
        private readonly employeeRepository: EmployeeRepository,
        private readonly specialRepository: SpecialtyRepository,
        private readonly fileRepository: FileRepository,
    ) {}

    async getAllEmployeesService() {

    }

    async getOneEmployeeService() {

    }

    async createEmployeeService(dto: EmployeeCreateDto) {

        const oldEmailEmployee = await this.employeeRepository.getEmployeeByEmail(dto.email);

        if(oldEmailEmployee) {
            throw new BadRequestException(EMPLOYEE_EMAIL_ALREADY_ERROR);
        }
        const file = await this.fileRepository.createFile(dto.avatar);
        const newEmployeeEntity = await new EmployeeEntity({ ...dto, password: '', deleted: false, avatar: file.id}).setPassword(dto.password);
        const employee = await this.employeeRepository.createEmployeeRepository(newEmployeeEntity);

        if(dto.specialtiesIds) {
            for(const specialty of dto.specialtiesIds) {
                const spec = await this.specialRepository.findSpecialtiesById(specialty)
                if(spec) {
                    await employee.$add('specialty', spec);
                }
            }
        }

        return { employee: { ...dto, avatar: file.filePath } };
    }

    async updateEmployeeService() {

    }

    async deleteEmployeeService() {

    }

    async searchEmployeeByNameService() {

    }

    async filterEmployeeBySpecialtyService() {

    }


}
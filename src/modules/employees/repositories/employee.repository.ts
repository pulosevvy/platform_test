import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { EmployeeCreateDto } from "../dtos/employee-create.dto";
import { EmployeeModel } from "../../../database/models/employee.model";

@Injectable()
export class EmployeeRepository {

    constructor(@InjectModel(EmployeeModel) private readonly employeeModel: typeof EmployeeModel) {}

    async createEmployeeRepository(dto: Omit<EmployeeCreateDto, 'specialtiesIds'>) {
        return this.employeeModel.create(dto);
    }

    async getEmployeeByEmail(email: string) {
        return this.employeeModel.findOne({where: {email: email}})
    }

}
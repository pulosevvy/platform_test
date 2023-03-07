import { Injectable } from "@nestjs/common";
import { SequelizeModuleOptions, SequelizeOptionsFactory } from "@nestjs/sequelize";

import { SpecialtyModel } from "../../database/models/specialty.model";
import { EmployeeModel } from "../../database/models/employee.model";
import { EmployeesSpecialtiesModel } from "../../database/models/employees-specialties.model";
import { FileModel } from "../../database/models/file.model";


@Injectable()
export class DatabaseConfig implements SequelizeOptionsFactory {
    createSequelizeOptions(): Promise<SequelizeModuleOptions> | SequelizeModuleOptions {
        return {
            dialect: 'postgres',
            username: process.env.POSTGRES_USERNAME,
            password: process.env.POSTGRES_PASSWORD,
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            database: process.env.POSTGRES_DATABASE,
            models: [SpecialtyModel, EmployeeModel, EmployeesSpecialtiesModel, FileModel],
            synchronize: true,
            autoLoadModels: true
        }
    }
}

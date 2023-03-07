import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { EmployeeService } from "./services/employee.service";
import { EmployeeController } from "./controllers/employee.controller";
import { EmployeeRepository } from "./repositories/employee.repository";
import { SpecialtyModel } from "../../database/models/specialty.model";
import { EmployeeModel } from "../../database/models/employee.model";
import { EmployeesSpecialtiesModel } from "../../database/models/employees-specialties.model";
import { SpecialtyModule } from "../specialties/specialty.module";
import { FilesModule } from "../files/files.module";

@Module({
    imports: [
        SequelizeModule.forFeature([
            EmployeeModel, SpecialtyModel, EmployeesSpecialtiesModel
        ]),
        SpecialtyModule,
        FilesModule
    ],
    controllers: [EmployeeController],
    providers: [
        EmployeeService,
        EmployeeRepository
    ],
    exports: [EmployeeService]
})

export class EmployeeModule {}
import { Module } from "@nestjs/common";

import { SpecialtyController } from "./controllers/specialty.controller";
import { SpecialtyService } from "./services/specialty.service";
import { SpecialtyRepository } from "./repositories/specialty.repository";
import { SequelizeModule } from "@nestjs/sequelize";
import { SpecialtyModel } from "../../database/models/specialty.model";
import { EmployeeModel } from "../../database/models/employee.model";
import { EmployeesSpecialtiesModel } from "../../database/models/employees-specialties.model";

@Module({
    imports: [
        SequelizeModule.forFeature([
            SpecialtyModel, EmployeeModel, EmployeesSpecialtiesModel
        ])
    ],
    controllers: [SpecialtyController],
    providers: [
        SpecialtyService,
        SpecialtyRepository
    ],
    exports: [SpecialtyRepository],
})

export class SpecialtyModule {}


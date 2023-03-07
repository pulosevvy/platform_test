import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { UUIDV4 } from "sequelize";

import { EmployeeModel } from "./employee.model";
import { SpecialtyModel } from "./specialty.model";

@Table({tableName: 'employees_specialties', createdAt: false, updatedAt: false})
export class EmployeesSpecialtiesModel extends Model<EmployeesSpecialtiesModel> {

    @Column({type: DataType.UUID, defaultValue: UUIDV4, primaryKey: true, unique: true, allowNull: false})
    id: string;

    @ForeignKey(() => EmployeeModel)
    @Column({type: DataType.UUID, allowNull: false})
    employeeId: string;

    @ForeignKey(() => SpecialtyModel)
    @Column({type: DataType.UUID, allowNull: false})
    specialtyId: string;
}
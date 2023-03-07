import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UUIDV4 } from "sequelize";

import { EmployeeModel } from "./employee.model";
import { EmployeesSpecialtiesModel } from "./employees-specialties.model";

export class ColorJson {
    colorBackground: string;
    colorText: string;
}

export interface SpecialtiesCreationAttributes {
    name: string;
    color: ColorJson;
}

@Table({tableName: 'specialties'})
export class SpecialtyModel extends Model<SpecialtyModel, SpecialtiesCreationAttributes> {

    @Column({type: DataType.UUID, defaultValue: UUIDV4, unique: true, primaryKey: true, allowNull: false})
    id: string;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.JSONB, allowNull: false})
    color: ColorJson;

    //Relationships
    @BelongsToMany(() => EmployeeModel, () => EmployeesSpecialtiesModel)
    employees: EmployeeModel[];
}


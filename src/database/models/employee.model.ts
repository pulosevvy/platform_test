import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UUIDV4 } from "sequelize";

import { SpecialtyModel } from "./specialty.model";
import { EmployeesSpecialtiesModel } from "./employees-specialties.model";
import { IEmployee, StatusEnum } from "../../common/libs/interfaces/user.interface";

@Table({tableName: 'employees'})
export class EmployeeModel extends Model<EmployeeModel, IEmployee>  {

    @Column({type: DataType.UUID, defaultValue: UUIDV4, unique: true, primaryKey: true, allowNull: false})
    id: string;

    @Column({type: DataType.STRING, allowNull: false, validate: {max: 127}})
    name: string;

    @Column({type: DataType.STRING, allowNull: false, unique: true, validate: {max: 255}})
    email: string;

    @Column({type: DataType.STRING, allowNull: false, validate: {max: 255}})
    password: string;

    @Column({type: DataType.STRING, allowNull: false, validate: {max: 31}})
    phone: string;

    @Column({type: DataType.ENUM(...Object.values(StatusEnum)), allowNull: false, defaultValue: StatusEnum.WORKS})
    status: keyof typeof StatusEnum;

    //YYYY-MM-DD
    @Column({type: DataType.DATEONLY, allowNull: true})
    birthday: string;

    @Column({type: DataType.STRING, allowNull: true, validate: {max: 63}})
    telegram: string;

    @Column({type: DataType.UUID, allowNull: true})
    avatar: string;

    @Column({type: DataType.BOOLEAN, defaultValue: false, allowNull: false})
    deleted: boolean;

    //Relationships
    @BelongsToMany(() => SpecialtyModel, () => EmployeesSpecialtiesModel)
    specialties: SpecialtyModel[]

}

import { IEmployee, StatusEnum } from "../../../common/libs/interfaces/user.interface";
import { compare, genSalt, hash } from "bcryptjs";

export class EmployeeEntity implements IEmployee{
    avatar?: string;
    birthday?: string;
    deleted: boolean;
    email: string;
    name: string;
    password: string;
    phone: string;
    status: StatusEnum;
    telegram?: string;

    constructor(employee: IEmployee) {
        this.avatar = employee.avatar;
        this.birthday = employee.birthday;
        this.deleted = employee.deleted;
        this.email = employee.email;
        this.name = employee.name;
        this.password = employee.password;
        this.phone = employee.phone;
        this.status = employee.status;
        this.telegram = employee.telegram;
    }

    public async setPassword(password: string) {
        const salt = await genSalt(10);
        this.password = await hash(password, salt);
        return this;
    }

    public async validatePassword(password: string) {
        return compare(password, this.password);
    }

}
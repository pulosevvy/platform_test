export enum StatusEnum {
    WORKS = 'Works',
    VACATION = 'Vacation',
    OUT_SICK = 'Out_sick',
    DISMISSED = 'Dismissed'
}

export interface IEmployee{
    name: string;
    email: string;
    password: string;
    phone: string;
    status: StatusEnum;
    birthday?: string;
    telegram?: string;
    avatar?: string;
    deleted: boolean;
}
export class IDatabaseConfigAttrs {
    dialect: string;
    username: string;
    password: string;
    host: string | number;
    port: string | number;
    database?: string;
    models?: string[];
    autoLoadModels?: boolean;
}
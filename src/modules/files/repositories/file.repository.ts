import { InjectModel } from "@nestjs/sequelize";
import { FileModel } from "../../../database/models/file.model";
import { Injectable } from "@nestjs/common";
import { EmployeeCreateDto } from "../../employees/dtos/employee-create.dto";
import { AvatarCreateDto } from "../../employees/dtos/avatar-create.dto";

@Injectable()
export class FileRepository {

    constructor(@InjectModel(FileModel) private readonly fileModel: typeof FileModel) {}

    async createFile(filePath: string) {
        return await this.fileModel.create({filePath})
    }

}
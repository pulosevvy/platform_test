import { Module } from "@nestjs/common";
import { FileService } from "./services/file.service";
import { FileRepository } from "./repositories/file.repository";
import { SequelizeModule } from "@nestjs/sequelize";
import { FileModel } from "../../database/models/file.model";

@Module({
    imports: [
        SequelizeModule.forFeature([
            FileModel
        ])
    ],
    providers: [FileService, FileRepository],
    exports: [FileRepository, FileService]
})

export class FilesModule {}
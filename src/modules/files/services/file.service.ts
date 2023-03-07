import { BadRequestException, Injectable } from "@nestjs/common";
import * as uuid from "uuid";
import { ensureDir, writeFile } from "fs-extra";

import { WRITE_FILE_ERROR } from "../constants/file.constants";
import axios from "axios";


@Injectable()
export class FileService {

    async createFile(file) {
        try {
            const fileExtension = file.originalname.split('.').pop()
            const fileName = uuid.v4();
            const filePath = `${__dirname}/../../../uploads`;
            await ensureDir(filePath)
            await writeFile(`${filePath}/${fileName + '.' + fileExtension}`, file.buffer)
            return fileName;
        } catch(e) {
            throw new BadRequestException(WRITE_FILE_ERROR)
        }
    }

}
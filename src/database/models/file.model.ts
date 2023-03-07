import { Column, DataType, Model, Table } from "sequelize-typescript";
import { UUIDV4 } from "sequelize";

interface FileAttributes {
    filePath: string;
}

@Table({tableName: 'files'})
export class FileModel extends Model<FileModel, FileAttributes> {

    @Column({type: DataType.UUID, defaultValue: UUIDV4, unique: true, primaryKey: true, allowNull: false})
    id: string;

    @Column({type: DataType.STRING, allowNull: false})
    filePath: string;

}
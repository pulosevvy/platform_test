import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { SpecialtyModel } from "../../../database/models/specialty.model";
import { SpecialtyCreateDto } from "../dtos/specialty-create.dto";
import { SpecialtyUpdateDto } from "../dtos/specialty-update.dto";
import { Op } from "sequelize";

@Injectable()
export class SpecialtyRepository {

    constructor(@InjectModel(SpecialtyModel) private specialModel: typeof SpecialtyModel) {}

    async createSpecialties(dto: SpecialtyCreateDto): Promise<SpecialtyModel> {
        return await this.specialModel.create(dto);
    }

    // async findSpecialtiesByName(name: string): Promise<SpecialtyModel> {
    //     return await this.specialModel.findOne({where: {name}});
    // }

    async findSpecialtiesById(id: string): Promise<SpecialtyModel> {
        return await this.specialModel.findByPk(id);
    }

    async findAllSpecialties(): Promise<SpecialtyModel[]> {
        return await this.specialModel.findAll();
    }

    async updateSpecialties(id: string, dto: SpecialtyUpdateDto) {
        return await this.specialModel.update(dto, {where: {id: id}})
    }

    async searchSpecialtiesByName(name: string) {
        return await this.specialModel.findAll({where: {name: {[Op.iLike]: `%${name}%`}}})
    }

    async deleteSpecialties(id: string) {
        return await this.specialModel.destroy({where: {id}});
    }

}
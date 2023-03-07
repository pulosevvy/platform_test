import { BadRequestException, Injectable } from "@nestjs/common";

import { SpecialtyCreateDto } from "../dtos/specialty-create.dto";
import { SpecialtyRepository } from "../repositories/specialty.repository";
import { SPECIALTIES_ALREADY_ERROR, SPECIALTIES_NOT_FOUND } from "../constants/specialty.constance";
import { SpecialtyUpdateDto } from "../dtos/specialty-update.dto";


@Injectable()
export class SpecialtyService {

    constructor(private readonly specialtiesRepository: SpecialtyRepository) {}

    async create(dto: SpecialtyCreateDto) {
        // const oldSpecialties = await this.specialtiesRepository.findSpecialtiesByName(dto.name);
        // if (oldSpecialties) {
        //     throw new BadRequestException(SPECIALTIES_ALREADY_ERROR);
        // }
        const newSpecialties = await this.specialtiesRepository.createSpecialties(dto);
        return { specialties: newSpecialties };
    }

    async getAllSpecialties() {
        return await this.specialtiesRepository.findAllSpecialties();
    }

    async updateSpecialties(id: string, dto: SpecialtyUpdateDto) {
        const updatedSpecialties = await this.specialtiesRepository.findSpecialtiesById(id);
        if (!updatedSpecialties) {
            throw new BadRequestException(SPECIALTIES_NOT_FOUND)
        }
        await this.specialtiesRepository.updateSpecialties(id, dto);
        const newUpdated = await this.specialtiesRepository.findSpecialtiesById(id);
        return {specialties: newUpdated}
    }

    async findOneSpecialtiesByName(name: string) {
        const result = await this.specialtiesRepository.searchSpecialtiesByName(name);
        if (!result) {
            throw new BadRequestException(SPECIALTIES_NOT_FOUND)
        }
        return {specialties: result}
    }

    async deleteSpecialties(id: string) {
        const deletedSpecialties = await this.specialtiesRepository.findSpecialtiesById(id);
        if (!deletedSpecialties) {
            throw new BadRequestException(SPECIALTIES_NOT_FOUND)
        }
        await this.specialtiesRepository.deleteSpecialties(id);
        return ''
    }

}
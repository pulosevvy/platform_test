import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class TestValidationPipe implements PipeTransform<any> {
    async transform(value: any, { metatype }: ArgumentMetadata) {
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }

        const object = plainToClass(metatype, value);
        const errors = await validate(object, { forbidUnknownValues: true, each: true });
        if (errors.length > 0) {
            throw new BadRequestException('Validation failed', this.buildError(errors));
        }

        return value;
    }

    private toValidate(metatype: Function): boolean {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find((type) => metatype === type);
    }

    private buildError(errors: ValidationError[]) {
        const result = {};
        errors.forEach((error) => {
            const property = error.property;
            Object.entries(error.constraints).forEach(([key, value]) => {
                result[property + key] = value;
            });
        });
        return result;
    }
}
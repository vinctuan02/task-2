import { PartialType } from '@nestjs/mapped-types';
import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { CreateProductTypeDto } from './create-product-type.dto';

export class UpdateProductTypeDto extends PartialType(CreateProductTypeDto) {}

// order
export class UpdateProductTypeOrderDtoRaw {
	@Expose()
	id: string;

	@Expose()
	order: number;
}

// @ApiExtraModels(UpdateOrderDto)
export class UpdateProductTypeOrderDto {
	@Expose()
	@IsOptional()
	data: UpdateProductTypeOrderDtoRaw[];
}

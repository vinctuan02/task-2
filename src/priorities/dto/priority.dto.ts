import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePriorityDto {
	@IsString()
	// @MaxLength(20)
	nameVi: string;

	@IsString()
	// @MaxLength(20)
	nameEn: string;

	@IsNumber()
	@IsOptional()
	order?: number;

	@IsString()
	@IsOptional()
	color?: string;

	@IsString()
	@IsOptional()
	note?: string;
}

// export class GetListPriorityDto extends BaseQuery {}

export class PriorityDto {
	id: number;
	nameVi: string;
	nameEn: string;
	order: number;
	color?: string;
	note?: string;
}

import { PartialType } from '@nestjs/mapped-types';

export class UpdatePriorityDto extends PartialType(CreatePriorityDto) {}

// order
export class UpdateOrderPriorityDtoRaw {
	id: string;

	order: number;
}

export class UpdateOrderPriorityDto {
	@IsOptional()
	data: UpdateOrderPriorityDtoRaw[];
}
